const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');


const signup = async(req, res)=>{
    let {fname, lname, email, password, confirmPassword, role} = req.body;

    console.log("Hello");
    try{
        
        if(!fname || !lname || !email || !password || !confirmPassword){
            return res.status(400).json({
                success:false,
                message: "All fields are required!"
            });
        }

        if(password !== confirmPassword){
            return res.status(400).json({
                success:false,
                message: "Password and Confirm Password Should be same.."
            });
        }

        // Check if user exist already
        let existingUser = await User.findOne({email:email});
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: 'User already exists',
            });
        }

        //  Hash the password
        let hashedPassword = await bcrypt.hash(password, 10);
        let name = fname + " " + lname;
        let imageURL =  `https://api.dicebear.com/5.x/initials/svg?seed=${fname} ${lname}`;
        const newUser = await User.create({
            name,
            email,
            password: hashedPassword,
            imageURL,
            role,
        });

        // console.log(newUser);
          

        res.status(200).json({
            success: true,
            message: "Account created sucessfully!",
            body:{
                User:newUser
            }
        });

        console.log("User rgistered successfully = " + email);
    }
    catch(error){
        console.log(error);
        console.log("Hello Error");
        res.status(400).json({
            success: false,
            message: "Registaration of User failed !!"
        });
    }

}

module.exports = {signup};