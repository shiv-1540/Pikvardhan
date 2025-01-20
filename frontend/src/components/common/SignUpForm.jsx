import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link ,useNavigate} from 'react-router-dom';
import bgland from '../../assets/imgs/bgland.png';

const SignUpForm = (props) => {
    let setIsLoggedIn = props.setIsLoggedIn;
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const navigate=useNavigate();

    const [FormData, setFormData] = useState({
        name:"",
        username:"",
        email: "",
        password: "",
        confirmPassword: ""
    });

    function changeHandller(event) {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name]: event.target.value,
        }));
    }

    function showPasswordHandller() {
        setShowPassword((prev) => !prev);
    }

    function showConfirmPasswordHandller() {
        setShowConfirmPassword((prev) => !prev);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/userAuthen/signup', FormData)
            .then((res) => {
                console.log(res.data);
                toast.success('Account created successfully!');
                setIsLoggedIn(true); // Set logged-in state only after success
                navigate('/login'); // Redirect to login page
            })
            .catch((err) => {
                //console.error(err.response);
                toast.error(err.response.data.message || 'Account Not Created!');
            });
    };

    return (
        <div className='flex items-center  min-h-screen bg-gray-300' style={{ backgroundImage: `url(${bgland})`}}>
        <form onSubmit={formSubmitHandler} className=" max-w-50 mx-auto m-5 p-8 bg-gray-300 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-center mb-6 ">Create an Account</h2>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input
                    type="text"
                    name='name'
                    value={FormData.name}
                    required
                    onChange={changeHandller}
                    placeholder='Name'
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input
                type="text"
                name='username'
                value={FormData.username}
                required
                onChange={changeHandller}
                placeholder='Username'
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    name='email'
                    value={FormData.email}
                    required
                    onChange={changeHandller}
                    placeholder='E-mail'
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                    <input
                        type={showPassword ? 'text' : 'password'}
                        name='password'
                        value={FormData.password}
                        required
                        onChange={changeHandller}
                        placeholder='Enter your Password'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    <span onClick={showPasswordHandller} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        {showPassword ? <FaEye />:<FaEyeSlash /> }
                    </span>
                </div>
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <div className="relative">
                    <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        name='confirmPassword'
                        value={FormData.confirmPassword}
                        required
                        onChange={changeHandller}
                        placeholder='Re-enter Password'
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                    />
                    <span onClick={showConfirmPasswordHandller} className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer">
                        {showConfirmPassword ? <FaEye />:<FaEyeSlash /> }
                    </span>
                </div>
            </div>

            <div>
                <button type='submit' className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200">
                    Create Account
                </button>
            </div>

            <p className="mt-4 text-center">
              Already SignIn? <Link to="/login" className="text-blue-500 hover:underline">Sign In</Link>
            </p> 
        </form>
       
        </div>
    );
}

export default SignUpForm;