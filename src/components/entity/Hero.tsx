import React from 'react';
import { FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";
import heroImage from '../../assets/images/hero_right.png';
import calendarIcon from '../../assets/images/calender.svg';
import penIcon from '../../assets/images/pen.svg';
import mediaIcon from '../../assets/images/play.svg';
import underline from '../../assets/images/underline.svg';
import userAvatar from '../../assets/images/user_avatar.png';

const Hero = () => {
    return (
        <div className="bg-[#245D51] flex items-center pb-20 lg:pb-0 pt-20 font-poppins">
            <div className="container-custom mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="lg:w-1/2 text-white relative">
                    <img src={penIcon} className="absolute flex lg:hidden -top-3 left-0 w-10 h-10" alt="Pen Icon" />
                    <img src={mediaIcon} className="absolute flex lg:hidden bottom-0 right-0 w-10 h-10" alt="Media Icon" />
                    <img src={calendarIcon} className="absolute flex lg:hidden bottom-2 left-0 w-10 h-10" alt="Calendar Icon" />
                    <h1 className="text-4xl lg:text-6xl text-center lg:text-left font-semibold leading-snug lg:leading-normal">
                        There is  
                        <span className="relative pl-3 lg:pl-4">
                            always
                            <img src={underline} className="absolute flex -top-3 lg:-top-3 right-0 w-32 lg:w-52 h-32 lg:h-52" alt="underline" />
                        </span><br /> something new for us to learn
                    </h1>
                    <p className="py-6 text-lg text-center lg:text-left">
                        We have created more than 100+ materials on various things that will help your career, 
                        with mentors who are experienced in their fields.
                    </p>
                    <div className='flex flex-col lg:flex-row gap-4 items-center'>
                        <button className="btn bg-primary border-none hover:bg-primary text-white font-semibold ">Start Journey <MdArrowOutward /></button>
                        <div className="flex items-center justify-center space-x-4">
                            <a href="#" className="text-white"><FaInstagram className="text-2xl" /></a>
                            <a href="#" className="text-white"><FaTwitter className="text-2xl" /></a>
                            <a href="#" className="text-white"><FaDiscord className="text-2xl" /></a>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/2 mt-8 lg:mt-0 relative hidden lg:flex justify-center items-end">
                    <img src={heroImage} className="max-w-sm rounded-lg" alt="Hero Right" />
                    <img src={penIcon} className="absolute hidden xl:flex top-0 left-48 w-12 h-12" alt="Pen Icon" />
                    <img src={mediaIcon} className="absolute hidden xl:flex top-28 right-48 w-12 h-12" alt="Media Icon" />
                    <img src={calendarIcon} className="absolute hidden xl:flex bottom-6 right-48 w-12 h-12" alt="Calendar Icon" />
                    <div className="absolute hidden bottom-52 left-0 transform translate-x-20 translate-y-10 p-4 bg-opacity-80 bg-white rounded-xl shadow-lg xl:flex items-start space-x-4">
                        <img src={userAvatar} className="w-10 h-10 rounded-full" alt="User Avatar" />
                        <div>
                            <div>
                                <p className="text-sm font-semibold text-gray-900">Learn basic ui ux design</p>
                                <p className="text-xs text-gray-500">Today at 12 PM</p>
                            </div>
                            <button className="bg-[#FF5A78] text-white text-sm px-6 py-1 rounded-md mt-2">Join Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
