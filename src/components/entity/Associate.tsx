import React from 'react';
import dribbbleLogo from '../../assets/images/dribbble.svg';
import microsoftLogo from '../../assets/images/microsoft.svg';
import paypalLogo from '../../assets/images/paypal.svg';
import googleLogo from '../../assets/images/google.svg';
import uberLogo from '../../assets/images/uber.svg';

const Associate = () => {
    return (
        <div className="bg-white font-poppins my-14 lg:my-24">
            <div className="container-custom mx-auto text-center space-y-10">
                <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold mb-4">Trusted more than <span className="text-[#CB8461]">100+</span> in the world</h2>
                <p className="text-gray-500 text-xs lg:text-lg mb-12 px-8 md:px-16 lg:px-56 xl:px-96 leading-relaxed lg:leading-loose">
                    they have asked us more than 3 times to teach their employees about various things to improve their skills
                </p>
                <div className="flex flex-wrap justify-center items-center gap-14">
                    <img src={uberLogo} className="w-20 lg:w-32" alt="Uber Logo" />
                    <img src={googleLogo} className="w-20 lg:w-32" alt="Google Logo" />
                    <img src={paypalLogo} className="w-20 lg:w-32" alt="PayPal Logo" />
                    <img src={microsoftLogo} className="w-20 lg:w-32" alt="Microsoft Logo" />
                    <img src={dribbbleLogo} className="w-20 lg:w-32" alt="Dribbble Logo" />
                </div>
            </div>
        </div>
    );
};

export default Associate;
