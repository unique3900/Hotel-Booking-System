const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    place: {
        type: mongoose.ObjectId,
        ref: 'Advertisement'
    },
    checkInDate: {
        type: Date,
        required:true
    },
    checkOutDate: {
        type: Date,
        required:true
    },
    name: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    phone:{
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true 
    },
    stayNumber: {
        type: Number,
        required:true 
    }
})

module.exports = mongoose.model("Bookings", BookingSchema);