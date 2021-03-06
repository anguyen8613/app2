const mongoose = require('mongoose');

const URI = 'mongodb+srv://admin:admin@cluster0.qmkgh.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async() => {
    await mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("db connected");
}

module.exports = connectDB;