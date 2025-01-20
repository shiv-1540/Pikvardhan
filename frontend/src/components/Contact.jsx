import React from 'react';
import Navbar from './common/Navbar';
import shiv from '../assets/profile/shiv.jpg'
import manavi from '../assets/profile/manavi.jpg'
import tejsri from '../assets/profile/tejsri.jpg'
import gahi from '../assets/profile/gahi.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faReddit, faWhatsapp, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    return (
        <div className="container mx-auto py-10">
            <Navbar/>

            <div className="row mt-10 text-center text-white laptop">
                <div className="col-lg-10 mx-auto mt-10">
                    <h1 className="text-4xl font-light pt-2 text-green-800">
                        <b>📞Contact-Us📞</b>
                    </h1>
                    <p className="text-lg font-medium text-black">
                        For Any Queries & Suggestions Contact Us. We Are Happy To Help.
                    </p>
                </div>
            </div>

            <div className="row p-3">
                <div className="col">
                    <section className="about" id="about">
                        <div className="heading text-center mb-5">
                            <h1 className="text-3xl font-bold">Team Members</h1>
                            <p className="text-lg">Introduce the talented individuals shaping the PikaVardhan project.</p>
                        </div>

                        <div className="flex flex-wrap justify-center">
                            {/* Team Member 1 */}
                            <div className="box bg-blue-100 shadow-lg rounded-lg m-4 p-4 text-center border-2 border-black hover:border-green-500 ">
                                <img src={shiv} alt="member-1" className="w-32  mx-auto " />
                                <h3 className="text-xl font-semibold mt-2">Shivshankar Ghyar</h3>
                                <p className="text-gray-900">
                                    B.Tech | CSE <br />
                                    MIT Academy of Engineering, Pune
                                </p>
                                
                                <div className="flex flex-row justify-center mt-2">
                                    <ul className="space-y-4">

                                        <li className="flex items-center">
                                         <a href="https://instagram.com" className="hover:text-white transition">
                                            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 mr-3 text-xl" />
                                         </a>
                                        </li>
                                       

                                        <li className="flex items-center">
                                            <a href="https://linkedin.com" className="hover:text-white transition">
                                            <FontAwesomeIcon icon={faLinkedin} className="text-blue-600 mr-3 text-xl" />
                                            </a>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            {/* Team Member 2 */}
                            <div className="box bg-blue-100 shadow-lg rounded-lg m-4 p-4 text-center">
                                <img src={gahi} alt="member-2" className="w-32 h-32 rounded-full mx-auto" />
                                <h3 className="text-xl font-semibold mt-2">Gahinath Madake</h3>
                                <p className="text-gray-600">
                                    B.Tech | CSE <br />
                                    MIT Academy of Engineering
                                </p>
                                <div className="flex justify-center mt-2">
                                    <a href="https://www.instagram.com/sunny_ii_v04?igsh=eW52dmI5aDExbGd0" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/amitkashyap2504" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="https://github.com/AMITKUMAR7970" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Team Member 3 */}
                            <div className="box bg-blue-100 shadow-lg rounded-lg m-4 p-4 text-center">
                                <img src={manavi} alt="member-3" className="w-32 h-32 rounded-full mx-auto" />
                                < h3 className="text-xl font-semibold mt-2">Manavi Pawar</h3>
                                <p className="text-gray-600">
                                    B.Tech | CSE <br />
                                    MIT Academy of Engineering
                                </p>
                                <div className="flex justify-center mt-2">
                                    <a href="https://www.instagram.com/adi._.harsh?igsh=MWF5OTJsbnA0MnJiZw==" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/aditya-choudhary-03644a23b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>

                            {/* Team Member 4 */}
                            <div className="box bg-blue-100  shadow-lg rounded-lg m-4 p-4 text-center">
                                <img src={tejsri} alt="member-4" className="w-32 h-32 rounded-full mx-auto" />
                                <h3 className="text-xl font-semibold mt-2">Tejsri Darade</h3>
                                <p className="text-gray-600">
                                    B.Tech | CSE <br />
                                    MIT Academy of Engineering
                                </p>
                                <div className="flex justify-center mt-2">
                                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-instagram text-xl"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/in/abhijit-kumar-b2422023a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-linkedin text-xl"></i>
                                    </a>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="mx-2">
                                        <i className="fab fa-github text-xl"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            
        </div>
    );
};

export default Contact;