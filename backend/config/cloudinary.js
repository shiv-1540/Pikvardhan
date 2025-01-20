const cloudinary = require('cloudinary').v2;
require('dotenv').config();

const cloudinaryConnect = async(req, res)=>{
    try{
        cloudinary.config({
            cloud_name:process.env.CLOUD_NAME,
            api_key:process.env.API_KEY,
            api_secret:process.env.API_SECRET,
        }
        );
        console.log('Cloudinary Connection is successful !! ');
    }
    catch(error){
        console.log('CLoudinary Connection Refused...');
        console.log(error.message)
    }
}

module.exports = cloudinaryConnect;