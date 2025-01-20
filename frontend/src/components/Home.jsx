import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [image, setImage] = useState(null);
  const [plantPrediction, setPlantPrediction] = useState(null);
  const [healthPrediction, setHealthPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    setLoading(true);
    setError(null);
    setPlantPrediction(null);
    setHealthPrediction(null);

    const formData = new FormData();
    formData.append('images', image);
    formData.append('latitude', 49.207);
    formData.append('longitude', 16.608);
    formData.append('similar_images', true);

    try {
      // Plant identification request
      const plantResponse = await axios.post('https://plant.id/api/v3/identification', formData, {
        headers: {
          'Api-Key': 'jRNnXHWGvTOD1bUl6BByG39BcsSfyuR1dBr7QbDDyLoM9m8kMG',
          'Content-Type': 'multipart/form-data',
        },
      });
      setPlantPrediction(plantResponse.data.result.classification.suggestions[0]);

      // Health assessment request
      const healthData = {
        images: [
          `data:image/jpeg;base64,${image}` // Convert the image to base64 if required
        ],
        latitude: 49.207,
        longitude: 16.608,
        similar_images: true,
      };

      const healthResponse = await axios.post('https://plant.id/api/v3/health_assessment', healthData, {
        headers: {
          'Api-Key': 'jRNnXHWGvTOD1bUl6BByG39BcsSfyuR1dBr7QbDDyLoM9m8kMG',
          'Content-Type': 'application/json',
        },
      });
      setHealthPrediction(healthResponse.data.result.disease.suggestions[0]);
    } 
    catch (err) {
      setError('Error identifying the plant or health status. Please try again.');
      console.error(err); // Log the error for debugging
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Plant Disease Identifier</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Identify Plant
        </button>
      </form>

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}
      
      {plantPrediction && (
        <div className="mt-4 bg-green-100 p-4 rounded">
          <h2 className="font-bold">Plant Prediction:</h2>
          <p>Name: {plantPrediction.name}</p>
          <p>Probability: {(plantPrediction.probability * 100).toFixed(2)}%</p>
          {plantPrediction.similar_images && plantPrediction.similar_images.length > 0 && (
            <img src ={plantPrediction.similar_images[0].url} alt={plantPrediction.name} className="mt-2" />
          )}
        </div>
      )}

      {healthPrediction && (
        <div className="mt-4 bg-yellow-100 p-4 rounded">
          <h2 className="font-bold">Health Assessment:</h2>
          <p>Disease Name: {healthPrediction.name}</p>
          <p>Probability: {(healthPrediction.probability * 100).toFixed(2)}%</p>
          {healthPrediction.similar_images && healthPrediction.similar_images.length > 0 && (
            <img src={healthPrediction.similar_images[0].url} alt={healthPrediction.name} className="mt-2" />
          )}
        </div>
      )}
    </div>
  );
};

export default Home;