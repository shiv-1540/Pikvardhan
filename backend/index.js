const express = require('express');
require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');


// Create Express app
const app = express();

const PORT = process.env.PORT;

const userAuthen = require('./routes/AuthenRoutes');



// Enable CORS for all origins (or specify allowed origins)
app.use(cors({
    origin: 'http://localhost:5173', // Your frontend's origin
    credentials: true,  //Allow cookie sending
}));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use('/userAuthen', userAuthen); // Ensure this matches frontend


app.listen(PORT, (res)=>{
    console.log(`Server running on the PORT = ${PORT}`);
});
