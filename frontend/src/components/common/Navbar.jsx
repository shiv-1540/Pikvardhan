import React,{useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import proflogo from '../../assets/imgs/me16.jpg'
import cartlogo1 from '../../assets/imgs/logo.jpg'
import cartlogo from '../../assets/imgs/logo.jpg'
import { useParams } from 'react-router-dom';

import { AuthContext } from "../../context/AuthContext";

function Navbar() {
  const { username,profile } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { authData } = useContext(AuthContext); // Accessing authData from context

  console.log("Auth UserId from Navbar: ",authData.userId);
  console.log("Auth Username from Navbar: ",authData.username);
  console.log("Auth profileImage from Navbar: ",authData.profileImage);
  console.log("Username from Navbar: ",username);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Navigate to a search results page with the query or handle search logic here
    if (searchQuery.trim() !== '') {
      navigate(`/search?query=${searchQuery}`);
    }
  };
 
  const handlelogout1=()=>{

    navigate('/');
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-sky-600 shadow-lg">
      <div className="flex justify-between items-center px-6 py-3">
        
        {/* Logo and Tagline */}
        <div className="flex flex-col">
          <b className="text-gray-800 text-3xl  font-bold text-align-center "><img src={cartlogo} style={{width:"150px", height:"60px"}} className=''/> </b>
       {/*   <p className="text-gray-100 text-1xl font-bold">BRINGING WORDS TO LIFE</p>*/}
        </div>


        {/* Profile and Logout */}
        <div className="flex items-center space-x-4">
          <button 
              className="hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              onClick={() => navigate(`/home/${username}`)}>
              Home
          </button>


          <button
          className=" hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
          onClick={() => window.location.href = 'https://cropdiseaseprediction.onrender.com/'}
          >
            Predict Disease
          </button>
          <button 
            className="hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => navigate('/croprecom')}>
            CropRecomend
        </button>
        
          {/* Weather*/}

        <button 
            className="hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => navigate(`/weather`)}>
            Weather
        </button>
          <button 
            className=" hover:bg-gray-600 text-gray-800 font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
            onClick={() => navigate(`/contactus`)}>
            About Us
          </button>

         
              {/* Profile Section */}
              <button 
                  className="flex items-center space-x-2"
                  onClick={toggleDropdown}>
                  <img
                    src={authData.profileImage||profile||proflogo}
                    alt="Profile Picture"
                    className="w-10 h-10 rounded-full object-cover"
                    id="profimg"
                  />
                  <p className="text-black ml-2">{username}</p>
              </button>


                {/* Dropdown Menu */}
           {isDropdownOpen && (
             <div className="absolute right-0 top-12 mt-2 w-48 bg-black border rounded  text-gray-200 shadow-lg">
               <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                onClick={() => navigate(`/profile/${username}`)}
              >
                Profile
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-900"
                onClick={() => navigate('/settings')}
              >
                Settings
              </button>
                {/* Logout Button */}
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                onClick={handlelogout1}
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
}

export default Navbar;