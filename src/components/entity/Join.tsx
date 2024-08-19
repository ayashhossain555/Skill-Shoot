import React from 'react';
import promoCorner from '/src/assets/images/promo_corner.svg';
import orangeSquare from '/src/assets/images/orange_square.svg';

const Join = () => {
    return (
        <div className="container-custom">
            <div className="bg-[#F2E7DB] my-10 py-10 px-24 lg:py-20 rounded-lg font-poppins relative flex flex-col lg:flex-row items-center justify-between">
                <div className="absolute top-0 left-0">
                    <img src={promoCorner} alt="Promo Corner" className="w-12 h-12" />
                </div>
                <div className="text-center lg:text-left w-full lg:w-7/12 lg:mr-10">
                    <h2 className="text-lg lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-4 lg:mb-0 opacity-90 leading-normal lg:leading-relaxed">
                        <span className="text-primary">Improve</span> your skills, and reach your career as soon as possible
                    </h2>
                </div>
                <div className="flex flex-col relative items-center lg:ml-10 lg:justify-end lg:flex-row gap-4 mt-4 lg:mt-0 w-full lg:w-5/12">
                    <button className="w-fit bg-primary hover:bg-[#a65f47] text-white text-sm lg:text-xl font-medium lg:font-bold py-4 px-8 rounded-md text-nowrap">Join Now</button>
                    <button className="w-fit bg-secondary hover:bg-[#1e4d44] text-white text-sm lg:text-xl font-medium lg:font-bold py-4 px-8 rounded-md text-nowrap">Subscribe Course</button>
                    <div className="absolute bottom-16 -right-24  lg:-bottom-28 lg:left-0 transform translate-x-4 translate-y-4">
                        <img src={orangeSquare} alt="Orange Square" className="w-8 h-8 lg:w-14 lg:h-14" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
