const express = require('express');
const cors = require('cors');
const connectDB = require('./utils/db'); // Import the connectDB function

//initializing express app
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

async function startServer() {
    await connectDB(); // Wait for the database connection before starting the server

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer().catch(err => console.error("Failed to start server", err));
