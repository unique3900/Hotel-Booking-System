const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.use(express.json({limit : 52428800}));
app.use(morgan('dev'));
app.use(cors());



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server Running on ", PORT);
})