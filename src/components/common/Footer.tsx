import React from 'react';
import mailCircle from '../../assets/images/mail_circle.svg';
import mailString from '../../assets/images/mail_string.svg';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-12 lg:py-24 font-poppins relative">
            <div className="container-custom">
                {/* Subscribe Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
                    <div className="text-center lg:text-left lg:w-1/2 mb-8 lg:mb-0">
                        <h3 className="text-lg lg:text-2xl font-semibold mb-4">
                            Subscribe to get notified about update
                        </h3>
                        <p className="text-sm lg:text-base text-gray-300 mb-6">
                            By subscribing with your mail, you will accept our privacy policy
                        </p>
                        <form className="flex flex-col lg:flex-row items-center">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-2 lg:py-3 w-full lg:w-auto rounded-md mb-4 lg:mb-0 lg:mr-4 focus:outline-none text-secondary"
                            />
                            <button 
                                type="submit" 
                                className="bg-primary hover:bg-opacity-75 text-white font-semibold px-6 py-2 lg:py-3 rounded-md transition-all duration-300"
                            >
                                Subscribe us
                            </button>
                        </form>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col lg:flex-row justify-between items-center mt-12 lg:mt-16">
                    <div className="flex items-center justify-center">
                        <h3 className="text-2xl lg:text-3xl font-bold text-primary">Skill <span className="text-white">Shoot</span></h3>
                    </div>
                    <nav className="mt-6 lg:mt-0 flex space-x-8 text-center">
                        <a href="/" className="hover:text-primary transition-colors duration-300">Home</a>
                        <a href="/course" className="hover:text-primary transition-colors duration-300">Course</a>
                        <a href="/subscribe" className="hover:text-primary transition-colors duration-300">Subscribe</a>
                        <a href="/about" className="hover:text-primary transition-colors duration-300">About</a>
                        <a href="/testimoni" className="hover:text-primary transition-colors duration-300">Testimoni</a>
                    </nav>
                </div>
            </div>

            {/* Floating Icons */}
            <img src={mailCircle} className="absolute bottom-10 right-10 w-10 h-10 lg:w-16 lg:h-16" alt="Mail Circle" />
            <img src={mailString} className="absolute top-10 left-10 w-12 h-12 lg:w-20 lg:h-20" alt="Mail String" />
        </footer>
    );
};

export default Footer;
