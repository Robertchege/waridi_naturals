const mongoose = require('mongoose');

async function connectDB() {
    const dbURI = "mongodb://localhost:27017/waridi"; // Replace with your actual MongoDB URI
    try {
        await mongoose.connect(dbURI);
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
        process.exit(1); // Exit the process with an error code
    }
}

module.exports = connectDB;
