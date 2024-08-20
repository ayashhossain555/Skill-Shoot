import React from 'react';
import dribbbleLogo from '../../assets/images/dribbble.svg';
import microsoftLogo from '../../assets/images/microsoft.svg';
import paypalLogo from '../../assets/images/paypal.svg';
import googleLogo from '../../assets/images/google.svg';
import uberLogo from '../../assets/images/uber.svg';

const Associate = () => {
    const logos = [
        { src: uberLogo, alt: "Uber Logo" },
        { src: googleLogo, alt: "Google Logo" },
        { src: paypalLogo, alt: "PayPal Logo" },
        { src: microsoftLogo, alt: "Microsoft Logo" },
        { src: dribbbleLogo, alt: "Dribbble Logo" }
    ];

    return (
        // Main container for the Associate section
        <div className="bg-white font-poppins my-14 lg:my-24">
            <div className="container-custom mx-auto text-center space-y-10">
                
                {/* Heading */}
                <h2 className="text-heading-mobile md:text-2xl lg:text-heading-desktop font-semibold">
                    Trusted more than <span className="text-primary">100+</span> in the world
                </h2>
                
                {/* Subheading */}
                <p className="text-gray-500 text-xs lg:text-lg mb-12 px-8 md:px-16 lg:px-56 xl:px-96 leading-relaxed lg:leading-loose">
                    they have asked us more than 3 times to teach their employees about various things to improve their skills
                </p>
                
                {/* Logo Grid */}
                <div className="flex flex-wrap justify-center items-center gap-14">
                    {logos.map((logo, index) => (
                        <img key={index} src={logo.src} className="w-20 lg:w-32" alt={logo.alt} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Associate;
