import React from 'react';
import aboutImage from '../../assets/images/about_left.png';
import headIcon from '../../assets/images/about_head_icon.png';
import penIcon from '../../assets/images/pen.svg';
import calendarIcon from '../../assets/images/calender.svg';
import playIcon from '../../assets/images/play.svg';
import underlineIcon from '../../assets/images/underline.svg';
import aboutLeftBg from '../../assets/images/about_left_green_bg.svg';
import { FiUser, FiVideo, FiUserCheck } from "react-icons/fi";
import { BiVideoRecording } from "react-icons/bi";
import { FaRegCirclePlay } from "react-icons/fa6";

const About = () => {
    return (
        <div className="bg-white container-custom py-16 lg:py-24 flex flex-col lg:flex-row items-center font-poppins">
            <div className="relative lg:w-1/2 hidden lg:flex justify-center items-end lg:justify-start lg:pr-10 mb-10 lg:mb-0">
                <div className="relative">
                    <img src={aboutImage} alt="About Us" className="z-10 relative w-[408px] h-[570px]" />
                    <img src={aboutLeftBg} alt="Background" className="absolute -bottom-[18px] w-[457px] h-[338px] z-0" />
                    <img src={penIcon} className="absolute top-32 right-6 w-14 h-14" alt="Pen Icon" />
                    <img src={calendarIcon} className="absolute top-2/3 left-0 transform -translate-y-1/2 w-14 h-14" alt="Calendar Icon" />
                    <img src={playIcon} className="absolute top-16 left-6 w-14 h-14" alt="Play Icon" />
                </div>
                <div className="absolute z-30 hidden bottom-24 left-24 transform translate-x-20 translate-y-10 p-4 bg-opacity-80 backdrop-blur-sm bg-white rounded-xl shadow-lg xl:flex items-start space-x-4">
                    <img src={headIcon} className="w-10 h-10 rounded-full" alt="User Avatar" />
                    <div>
                        <div>
                            <p className="text-sm font-semibold text-gray-900">How to build a team</p>
                            <p className="text-xs text-gray-500">Today at 12 PM</p>
                        </div>
                        <button className="bg-[#FF5A78] text-white text-sm px-6 py-1 rounded-md mt-2">Join Now</button>
                    </div>
                </div>
            </div>

            <div className="lg:w-1/2 flex flex-col justify-center text-left gap-8 lg:gap-16">
                <h2 className="text-xl md:text-3xl lg:text-5xl font-bold">
                    Let us 
                    <span className="text-secondary relative ml-3">
                        Skill Shoot
                        <img src={underlineIcon} alt="Underline" className="absolute w-full right-0 -bottom-1 lg:-bottom-3" />
                    </span>
                </h2>
                <p className="text-gray-500 text-xs lg:text-base leading-normal lg:leading-relaxed">
                    We are a company engaged in education with the aim of improving the skills of many people and so that younger people can reach the career paths they want. <br/><br/>
                    We have been around since 2019 with currently 100+ updated materials and 15K members who have joined.
                </p>
                <div className="grid grid-cols-2 gap-4 lg:gap-8">
                    <div className="flex items-center">
                        <div className='bg-primary bg-opacity-20 rounded-full p-2'>
                            <FiUser className="text-primary w-6 h-6" />
                        </div>
                        <span className='text-xs lg:text-base font-bold ml-3'>15K People Join</span>
                    </div>
                    <div className="flex items-center">
                        <div className='bg-primary bg-opacity-20 rounded-full p-2'>
                            <FiUserCheck className="text-primary w-6 h-6" />
                        </div>
                        <span className='text-xs lg:text-base font-bold ml-3'>Trusted Mentor</span>
                    </div>
                    <div className="flex items-center">
                        <div className='bg-primary bg-opacity-20 rounded-full p-2'>
                            <BiVideoRecording className="text-primary w-6 h-6" />
                        </div>
                        <span className='text-xs lg:text-base font-bold ml-3'>30+ Free Videos</span>
                    </div>
                    <div className="flex items-center">
                        <div className='bg-primary bg-opacity-20 rounded-full p-2'>
                            <FaRegCirclePlay className="text-primary w-6 h-6" />
                        </div>
                        <span className='text-xs lg:text-base font-bold ml-3'>100+ Premium Videos</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
