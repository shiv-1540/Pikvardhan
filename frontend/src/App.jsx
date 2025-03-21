import Navbar from './components/common/Navbar';
import About from './components/About';
import React from 'react';

import Contact from './components/Contact';
import { Toaster } from 'react-hot-toast';
import SignUpForm from './components/common/SignUpForm';
import LoginForm from './components/common/LoginForm';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import LandingPage from './pages/landingPage';
import HomePage from './pages/Home/HomePage';
import ProfilePage from './pages/ProfilePage';
import Predict from './pages/Predict';
import WeatherPage from './pages/WeatherPage';
import CropRecom from './pages/CropRecom';



const routes = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/signup', element: <SignUpForm /> },
  { path:'/login',element:<LoginForm/>},
  { path: '/home/:username', element: <HomePage /> },
  { path: '/profile/:username', element: <ProfilePage /> },
  { path: '/contactus', element: <Contact /> },
  { path: '/predict', element: <Predict/>},
  { path: '/weather',element: <WeatherPage/>},
  {path:'/croprecom',element:<CropRecom/>},
]);


const App = () => {
  return (
    <AuthProvider>
      <Toaster position="top-center" />
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;