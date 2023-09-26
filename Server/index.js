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
const imageDownloader = require('image-downloader');
const fs = require('fs');
const multer = require('multer');
const Advertisement = require('./Model/Advertisement');
const Bookings = require('./Model/Bookings');
const app = express();

app.use(express.json({limit : 52428800}));
app.use(morgan('dev'));
app.use(cookieParser());
app.use('/uploads', express.static( __dirname + '/uploads'));
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
                    id: userExist._id,
                    phone:userExist.phone
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
            jwt.verify(token, SECRET_KEY, {}, async (err, user) => {
                if (err) throw err;
                const { fullName, email, _id, phone } = await User.findById(user.id);
                res.json({ success: true, fullName, email, _id, phone })
            })
        }

    } catch (error) {
        console.log("Internal Server error Login", error)
    }

});

app.post('/api/v1/upload-ad-img', async (req, res) => {
    const { imageURL } = req.body;
    try {
        const newName = 'photo' + Date.now() + '.jpg';
        await imageDownloader.image({
            url: imageURL,
            dest: __dirname+'/uploads/'+newName,
        });
        res.json({ op: newName});
    } catch (error) {
        console.log("Internal Server error upload img",error)
    }
})

// =============== Upload Local Image =====================
const photoMiddleware = multer({dest:'uploads/'});
app.post('/api/v1/upload', photoMiddleware.array('photos', 100), async (req, res) => {
    //    Reference youtube: Coding with David
    try {
        const uploadedFiles = [];
    for (let i = 0; i < req.files.length; i++){
        const {path,originalname} = req.files[i];
        const parts = originalname.split('.');
        const ext = parts[parts.length - 1];
        const newPath = path + '.' + ext;
        fs.renameSync(path, newPath);
        uploadedFiles.push(newPath.replace('uploads\\',''));
    }
    res.json({success:true,message:"Image Uploaded",op:uploadedFiles});
    } catch (error) {
        console.log(error)
    }
    
})

// ================ Add New Advertisement =============
app.post('/add-new-advertisement', async (req, res) => {
    const name = req.body.propertyName;
    const city = req.body.city;
    const description = req.body.propertyDesc;
    const address = req.body.propertyAddress;
    const extracheck = req.body.extraCheck;
    const maxPeople = req.body.stayNumber;
    const images = req.body.uploadedImage;
    const checkInDate = req.body.checkInDate;
    const checkOutDate = req.body.checkOutDate;
    const roomType = req.body.roomTypeSel;
    const roomNumber = req.body.roomNumber;
    const price = req.body.pricePerNight;
    try {
        const { token } = req.cookies;
        console.log(req.body.extras)
        const SECRET_KEY = process.env.JWT_SECRET;
        console.log("Imageeee", images);
        jwt.verify(token, SECRET_KEY, {}, async (err, user) => {
            if (err) throw err;
            const op = await Advertisement.create({ name,city, extracheck,roomNumber, owner: user.id, description, address, maxPeople, images, checkInDate, checkOutDate, roomType,images, price, phone: user.id });
            res.json(op)
        })
       


     
       
   } catch (error) {
    console.log(error)
    }
    
    
})

// ================== Advertisements ===============
app.get('/api/v1/advertisements', async (req, res) => {
    try {
        const fetchdata = await Advertisement.find({});
        res.json({success:true,message:"Ads fetched Successfully",fetchdata});
    } catch (error) {
        console.log(error);
    }
})

// Return Advertisement of a user

app.post('/my-advertisements', async (req, res) => {
    const { token } = req.cookies;
    const SECRET_KEY = process.env.JWT_SECRET;
    try {
        jwt.verify(token, SECRET_KEY, {}, async (err, user) =>
        {
            if(err) console.log(err)
            const fetchData = await Advertisement.find({ owner: user.id });
            res.json({ success:true,message:"Advertisents Fetch Successfully",fetchData} );
        })
    } catch (error) {
        console.log(error)
    }
})


    //    ===============Get Ad by Id ==============
    app.get('/api/v1/Advertisement/:id', async (req, res) => {
        const id = req.params.id;
        try {
            const fetchData = await Advertisement.findById({ _id: id });
            res.json({success:true,fetchData})
        } catch (error) {
            console.log(error)
        }
    })


// ======================== Update Advertisement =====================

app.put('/api/v1/update-advertisement', async (req, res) => {
        const id = req.body.id;
    const name = req.body.propertyName;
    const city = req.body.city;
        const description = req.body.propertyDesc;
        const address = req.body.propertyAddress;
        const extracheck = req.body.extraCheck;
        const maxPeople = req.body.stayNumber;
        const images = req.body.uploadedImage;
        const checkInDate = req.body.checkInDate;
        const checkOutDate = req.body.checkOutDate;
        const roomType = req.body.roomTypeSel;
        const roomNumber = req.body.roomNumber;
        const price = req.body.pricePerNight;
        try {
            const { token } = req.cookies;
            console.log(req.body.extras)
            const SECRET_KEY = process.env.JWT_SECRET;
         
            jwt.verify(token, SECRET_KEY, {}, async (err, user) => {
                if (err) throw err;

                if (token.id == user.owner) {
                    const fetchResponse = await Advertisement.findByIdAndUpdate(id, { name, description, address, extracheck, maxPeople, images, checkInDate, checkOutDate, roomType, roomNumber, price,city });
                    res.json({ success: true });
                }
            })
           
       } catch (error) {
        console.log(error)
        }  
})
    
// ======== Delete Advertisement=================

app.delete('/api/v1/delete/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleteHandle = await Advertisement.findByIdAndDelete(id);
        res.json({ success: true })
    } catch (error) {
        console.log(error)
    }
});

// ==============New Booking=================

app.post('/api/v1/new-booking', async (req, res) => {
    const { productId,place, price, checkInDate, checkOutDate,stayNumber,rooms} = req.body;
    try {
        const { token } = req.cookies;
        const SECRET_KEY = process.env.JWT_SECRET;
        jwt.verify(token, SECRET_KEY, {}, async (err, user) => {
            if (err) res.json({ success: false, message: "Error in JWT validation" })
           
            const fetchData = await Bookings.create({ place,stayNumber, checkInDate, checkOutDate,name:user.id, phone:user.phone, price });
            const advert = await Advertisement.findById(productId);
            const roomNew = advert.roomNumber - rooms;
            res.json({ success: true, message: "Booking Made Successfully", fetchData })
            const updateAdvert=await Advertisement.findByIdAndUpdate(productId,{roomNumber: roomNew})
        })
    } catch (error) {
        
    }
})


// ================= Search Advertisement By Date and Address =========
app.post('/api/v1/search', async (req, res) => {
    try {
        const { checkInDate, checkOutDate, address } = req.body;
        const d1 = new Date(checkInDate);
        const d2 = new Date(checkOutDate);
        console.log(address)
        if (d1 > d2) {
           res.json({success:false,msg:"CheckIn Must Before CheckOut"})
        }
        else {
            const fetchList = await Advertisement.find({
                city: address,
                checkInDate: { "$gte": d1 },
                checkOutDate:{"$lte":d2}
            });
            console.log(fetchList)
            if (fetchList) {
                res.json({fetchList})
            }
            else {
                res.json({fetchList:[]})
            }
            
        }
    } catch (error) {
        res.json({msg:"Error in Search",error})
    }
   
})

const port = process.env.PORT;

app.listen(port, () => {
    console.log("Server Running on "+ port)
})