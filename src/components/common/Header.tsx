import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-[#245D51]">
            <div className="container-custom mx-auto">
                <div className="navbar text-white font-poppins relative">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-2xl">Skill <span className="text-[#CB8461]">Shoot</span></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 font-light">
                            <li><a className="opacity-100 text-white">Home</a></li>
                            <li><a className="hover:opacity-100 opacity-70">Course</a></li>
                            <li><a className="hover:opacity-100 opacity-70">Subscribe</a></li>
                            <li><a className="hover:opacity-100 opacity-70">About</a></li>
                            <li><a className="hover:opacity-100 opacity-70">Testimonial</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <a className="btn bg-[#245D51] border-none hover:bg-[#1e4d44] text-white font-normal">Login</a>
                        <a className="btn bg-[#CB8461] border-none hover:bg-[#b46e49] text-white font-normal ml-2 px-8">Register</a>
                    </div>
                    <div className="lg:hidden absolute right-0 top-0 mt-2 mr-2">
                        <div 
                            tabIndex={0} 
                            role="button" 
                            className="btn btn-ghost" 
                            onClick={toggleDropdown}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        {isOpen && (
                            <ul
                                className="menu menu-sm text-secondary dropdown-content bg-white bg-opacity-85 backdrop-blur-sm rounded-box z-[1] mt-1 w-52 p-2 shadow absolute right-0 top-10">
                                <li><a className="hover:opacity-100 opacity-70">Home</a></li>
                                <li><a className="hover:opacity-100 opacity-70">Course</a></li>
                                <li><a className="hover:opacity-100 opacity-70">Subscribe</a></li>
                                <li><a className="hover:opacity-100 opacity-70">About</a></li>
                                <li><a className="hover:opacity-100 opacity-70 mb-4">Testimonial</a></li>
                                <li><a className="btn bg-[#245D51] border-none hover:bg-[#1e4d44] text-white font-medium mb-2">Login</a></li>
                                <li><a className="btn bg-[#CB8461] border-none hover:bg-[#b46e49] text-white font-medium">Register</a></li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
