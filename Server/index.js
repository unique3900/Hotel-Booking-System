const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const DBConnection = require('./DBCONN/db');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const User = require('./Model/User');
const bcrypt = require('bcrypt');
const app = express();

app.use(express.json({limit : 52428800}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true,
  }));
mongoose.connect(process.env.MONGODB_URL);

//ROutes

// ========================== Register Route=======================================

app.post('/api/v1/register', async (req, res) => {
    const { fullname, email, password, phone } = req.body;
    try {
        if (!email || !password || !fullname || !phone) {
            res.json({ success: false, message: "Fill out Every field" });
        }
        const userExist = await User.findOne({email});
        if (userExist) {
            res.json({ success: false, message: "User Already Exist" });
        }
        else {
            const userData = await User.create({
                fullName:fullname,
                email,
                password: bcrypt.hashSync(password, 10),
                phone
            });
            res.json({ success: true, message: "User Registration Successful", userData });
        }


    } catch (error) {
        console.log("Internal Server Error Register",error)
    }
})


// ====================== Login Route======================
app.post('/api/v1/login', async (req, res) => {
    const { email, password } = req.body;
    const SECRET_KEY = process.env.JWT_SECRET;
    try {
        const userExist = await User.findOne({ email });
        if (userExist) {
            const passCheck = bcrypt.compareSync(password, userExist.password);
            if (passCheck) {
                jwt.sign({
                    email: userExist.email,
                    id:userExist._id
                }, SECRET_KEY, {}, (err, token) => {
                    if (err) throw err;
                    res.cookie("token",token).json({success:true,message:"User Authenticated",userExist,token})
                })
            }
            else {
                res.json({success:false,message:"Invalid Password"})
            }
        }
        else {
            res.json({success:false,message:"User Doesnot Exist"})
        }
    } catch (error) {
        console.log("Internal Server error Login",error)
    }
})

//====================User Profile ==========================
app.get('/api/v1/profile', async (req, res) => {
    const SECRET_KEY = process.env.JWT_SECRET;
    const { token } = req.cookies;
    try {
        if (token) {
            jwt.verify(token, SECRET_KEY, {},async (err, user) => {
                if (err) throw err;
                const { fullName, email, _id, phone } = await User.findById(user.id);
                res.json({success:true,fullName,email,_id,phone})
            })
        }

    } catch (error) {
        console.log("Internal Server error Login",error)
    }

})

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server Running on "+ port)
})