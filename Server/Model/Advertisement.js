const mongoose = require('mongoose');
const AdvertisementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: mongoose.ObjectId,
        ref: 'User'
    },
    extracheck: {
        type: [String],
    },
    maxPeople: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        required: true
    },
    checkInDate: {
        type: String,
        required: true
    },
    checkOutDate: {
        type: String,
        required: true
    },
    roomType: {
        type: String,
        required: true
    },
    roomNumber: {
        type: Number,
        required:true
    },
    price: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    owner: {
        type: mongoose.ObjectId,
        ref: 'User'
    },

}, { timestamps: true },{ typeKey: '$type' });
module.exports = mongoose.model("Advertisement", AdvertisementSchema);