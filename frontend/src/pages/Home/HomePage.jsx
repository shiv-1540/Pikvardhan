// src/pages/HomePage.js
import React from 'react';
import Footer from '../../components/common/footer';
import Navbar from '../../components/common/Navbar';
import './home.css'

const HomePage = () => {
  return (
    <div >
     
      {/* Hero Section */}
      <section className="bg-blue-600 text-white h-screen flex items-center justify-center" id="home">
         <Navbar/>
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Agricultural Platform</h1>
          <p className="text-lg mb-8">Empowering farmers with smart solutions for crop management.</p>
       
          <a href="/predict" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Disease Detection</h3>
              <p>Utilize AI to identify crop diseases from images quickly and accurately.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Fertilizer Recommendations</h3>
              <p>Get personalized fertilizer suggestions based on crop conditions.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Farmer Collaboration</h3>
              <p>Join a community of farmers to share knowledge and best practices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-4 mb-4 md:mb-0">
              <p className="italic">"This platform has transformed the way I manage my crops!"</p>
              <p className="font-semibold mt-2">- Farmer John</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md mx-4 mb-4 md:mb-0">
              <p className="italic">"The fertilizer recommendations have improved my yield significantly."</p>
              <p className="font-semibold mt-2">- Farmer Jane</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="mb-8">Join us today and take your farming to the next level!</p>
        <a href="/signup" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">Sign Up Now</a>
      </section>

      <Footer/>
    </div>
  );
};

export default HomePage;