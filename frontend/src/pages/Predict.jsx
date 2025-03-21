import React, { useState } from 'react';
import axios from 'axios';
import Navbar from '../components/common/Navbar';
import uploadicon from '../assets/icons/upload.png';
import analysisicon from '../assets/icons/analysis.png';
import resulticon from '../assets/icons/results.png';

const Predict = () => {
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
            setPreview(URL.createObjectURL(file)); // Show preview
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!image) return alert("Please upload an image!");

        setLoading(true);
        const formData = new FormData();
        formData.append('file', image); // Ensure 'file' matches FastAPI

        try {
            const response = await axios.post('https://cropdiseaseprediction-1.onrender.com/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            console.log("Prediction Response:", response.data);
            setResult(response.data);
        } catch (error) {
            console.error('Error during prediction:', error);
            alert("Prediction failed. Check the console for more details.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-green-100 to-green-50">
            <Navbar />

            <div className="max-w-5xl mx-auto p-6">
                <h2 className="text-3xl font-extrabold text-center text-green-800 my-14 py-10">
                    Crop Disease Detection
                </h2>

                <div className="flex flex-col md:flex-row gap-10 items-start">
                    {/* Steps Box */}
                    <div className="w-full md:w-1/3 bg-green-200 rounded-lg shadow-md p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">How It Works</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center space-x-3">
                                <img src={uploadicon} alt="upload" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>1. Upload Image:</strong> Upload an image of a diseased crop.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={analysisicon} alt="analysis" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>2. Analysis:</strong> AI detects potential diseases.
                                </span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <img src={resulticon} alt="results" className='w-10 h-10'/>
                                <span className="text-green-700 font-medium">
                                    <strong>3. Results:</strong> View disease prediction & solutions.
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Form & Results */}
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
                            {preview && (
                                <img
                                    src={preview}
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
                                <p className="text-green-800">{result.predicted_disease}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Predict;
