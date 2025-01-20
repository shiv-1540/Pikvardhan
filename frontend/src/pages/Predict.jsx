import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';
import { FaUpload, FaChartBar, FaCheckCircle } from 'react-icons/fa'; // Import icons
import uploadicon from '../assets/icons/upload.png';
import analysisicon from '../assets/icons/analysis.png';
import resulticon from '../assets/icons/results.png';

const Predict = () => {
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    // const handleImageChange = (e) => {
    //     const file = e.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => setImage(reader.result);
    //         reader.readAsDataURL(file);
    //     }
    // };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
           // const reader = new FileReader();
            setImage(file); // Store the raw file
            // reader.onloadend = () => setImage(reader.result);
            // reader.readAsDataURL(file);
        }
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return;
    
        setLoading(true);
        const formData = new FormData();
        formData.append('image', image); // Use the raw file
       // image="C:\Users\Shivshankar\Downloads\Faltu\tomatodisease.jpg"
        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setResult(response.data);
        } catch (error) {
            console.error('Error during prediction:', error);
        } finally {
            setLoading(false);
        }
    };
    
        // try {
        //     const response = await axios.get('http://localhost:5000/api/predict'
        //     );
        //     console.log("from predict: ",response.data);
        //     setResult(response.data);
        // } catch (error) {
        //     console.error('Error during prediction:', error);
        // } finally {
        //     setLoading(false);
        // }
   // };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50">
            <Navbar />

            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-3xl font-extrabold text-center text-green-800 my-14 py-10">
                    Crop Disease Detection
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-start">
 {/* Steps Sidebox */}
                    <div className="w-full md:w-1/3 bg-green-200 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">How It Works</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <img src={uploadicon} alt="upload" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>1. Upload Image:</strong> Upload an image of a plant showing signs of disease.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={analysisicon} alt="analysis" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>2. Analysis:</strong> Our AI model processes the image to identify potential diseases.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={resulticon} alt="results" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>3. Results:</strong> View the disease prediction and recommended solutions.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Form and Results */}
                    <div className="w-full md:w-2/3 bg-white rounded-lg shadow-md p-6">
                        <form onSubmit={handleSubmit} className="flex flex-col items-center">
                            <div className="w-full mb-6">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="w-full p-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                />
                            </div>
                            {image && (
                                <img
                                    src={image}
                                    alt="Preview"
                                    className="mb-6 w-full h-auto max-h-64 rounded-md border border-green-300 shadow-sm"
                                />
                            )}
                            <button
                                type="submit"
                                className="w-full py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition duration-200"
                            >
                                {loading ? 'Analyzing...' : 'Predict Disease'}
                            </button>
                        </form>

                        {result && (
                            <div className="mt-8 bg-green-50 border-l-4 border-green-600 p-4 rounded-md">
                                <h3 className="text-lg font-semibold text-green-700">Predicted Disease:</h3>
                                <p className="text-green-800">{result.disease}</p>
                                <h3 className="text-lg font-semibold text-green-700 mt-4">
                                    Recommended Fertilizer:
                                </h3>
                                <p className="text-green-800">{result.supplement_name}</p>
                                <h3 className="text-lg font-semibold text-green-700 mt-4">
                                    Prevention Steps:
                                </h3>
                                <p className="text-green-800">{result.prevention}</p>
                                <a href={result.buy_link} className="text-blue-600 underline mt-2 block">
                                    Buy Recommended Supplement
                                </a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Predict; 