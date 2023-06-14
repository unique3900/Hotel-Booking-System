const mongoose = require('mongoose');

const DBConnection =  () => {
    try {
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log(error + "Something went wrong while connecting Database");
    }
}

module.exports=DBConnection