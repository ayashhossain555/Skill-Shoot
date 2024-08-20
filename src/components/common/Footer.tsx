import React from 'react';
import mailCircle from '../../assets/images/mail_circle.svg';
import mailString from '../../assets/images/mail_string.svg';

const Footer = () => {
    return (
        // Footer container with a background color from the Tailwind config
        <footer className="bg-secondary text-white pb-12 pt-32 font-poppins relative">
            <div className="container-custom">
                
                {/* Subscribe Section */}
                <div className="flex flex-col lg:flex-row justify-center items-center">
                    <div className="text-center mb-8 lg:mb-16">
                        
                        {/* Subscribe Heading */}
                        <h3 className="text-heading-mobile lg:text-heading-desktop font-semibold mb-4">
                            Subscribe to get notified about update
                        </h3>
                        
                        {/* Subscribe Description */}
                        <p className="text-xs lg:text-base text-gray-300 mb-10 lg:mb-16 leading-relaxed opacity-80">
                            By subscribing with your mail, you will accept our privacy policy
                        </p>
                        
                        {/* Subscribe Form */}
                        <form className="flex flex-col lg:flex-row justify-center items-center">
                            <input 
                                type="email" 
                                placeholder="Enter your email" 
                                className="px-4 py-2 lg:py-3 w-full lg:w-96 rounded-sm mb-4 lg:mb-0 lg:mr-4 text-xs lg:text-base focus:outline-none placeholder:text-xs placeholder:lg:text-base placeholder:text-white placeholder:opacity-70 text-white bg-white bg-opacity-15"
                            />
                            <button 
                                type="submit" 
                                className="bg-primary hover:bg-opacity-75 text-white font-semibold lg:font-medium text-xs lg:text-lg px-6 py-2 lg:py-3 rounded-sm transition-all duration-300"
                            >
                                Subscribe us
                            </button>
                        </form>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-0 lg:mt-16">
                    <div className="flex items-center justify-center mt-16 lg:mt-0">
                        <h3 className="text-2xl lg:text-3xl font-bold text-white">
                            Skill <span className="text-primary">Shoot</span>
                        </h3>
                    </div>
                    
                    {/* Navigation Menu */}
                    <nav className="mt-6 lg:mt-0 flex flex-col lg:flex-row gap-4 lg:gap-8 text-center">
                        <a href="/" className="hover:text-primary transition-colors text-xs lg:text-lg duration-300">Home</a>
                        <a href="/course" className="hover:text-primary hover:opacity-100 opacity-70 transition-colors text-xs lg:text-lg duration-300">Course</a>
                        <a href="/subscribe" className="hover:text-primary hover:opacity-100 opacity-70 transition-colors text-xs lg:text-lg duration-300">Subscribe</a>
                        <a href="/about" className="hover:text-primary hover:opacity-100 opacity-70 transition-colors text-xs lg:text-lg duration-300">About</a>
                        <a href="/testimoni" className="hover:text-primary hover:opacity-100 opacity-70 transition-colors text-xs lg:text-lg duration-300">Testimoni</a>
                    </nav>
                </div>
            </div>

            {/* Floating Decorative Icons */}
            <img 
                src={mailCircle} 
                className="absolute bottom-1/2 right-10 lg:right-20 xl:right-48 w-12 h-12 lg:w-20 lg:h-20" 
                alt="Mail Circle" 
            />
            <img 
                src={mailString} 
                className="absolute bottom-1/3 left-16 lg:left-40 xl:left-72 w-10 h-10 lg:w-16 lg:h-16" 
                alt="Mail String" 
            />
        </footer>
    );
};

export default Footer;
