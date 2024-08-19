import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Subscription = () => {
    const plans = [
        {
            name: "Base",
            price: "$50",
            duration: "1 month",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            features: [
                "Access all videos",
                "Get Certificate",
                "Chat support",
                "Update Notification",
                "Download material"
            ],
        },
        {
            name: "Pro",
            price: "$100",
            duration: "6 month",
            description: "Lorem Ipsum is simply dummy text of the printing ",
            mostPopular: true,
            features: [
                "Access all videos",
                "Get Certificate",
                "Chat support",
                "Update Notification",
                "Download material"
            ],
        },
        {
            name: "Enterprise",
            price: "$200",
            duration: "12 month",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            features: [
                "Access all videos",
                "Get Certificate",
                "Chat support",
                "Update Notification",
                "Download material"
            ],
        },
    ];

    return (
        <div className="bg-white py-20 font-poppins">
            <div className="container-custom">
                <div className="text-center mb-10 lg:mb-28">
                    <h2 className="text-lg lg:text-4xl font-semibold mb-4">
                        <span className='text-primary'>Subscribe</span> with us now
                    </h2>
                    <p className="text-gray-500 text-base px-10">
                        by subscribing now you will be able to access the material easily and cheaply, 
                        so you will be very efficient and benefit
                    </p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 px-16 lg:px-60">
                    {plans.map((plan, index) => (
                        <div 
                            key={index} 
                            className={`p-8 rounded-3xl relative ${
                                plan.mostPopular ? 
                                'order-first lg:mb-0  mb-9 xl:order-none bg-secondary text-white lg:-translate-y-14 shadow-2xl shadow-emerald-800' : 
                                'bg-white text-gray-800'
                            }`}
                        >
                            {plan.mostPopular && (
                                <div className="absolute top-3 right-3 bg-primary text-white font-light text-xs px-4 py-2 rounded-full">
                                    MOST POPULAR
                                </div>
                            )}
                            <h3 className={`text-lg lg:text-4xl font-semibold lg:font-bold ${plan.mostPopular ? 'mb-5 mt-8' : 'mb-3'}`}>
                                {plan.price} <span className="text-xs lg:text-base font-normal">/ {plan.duration}</span>
                            </h3>
                            <h4 className="text-xl lg:text-[28px] font-bold mb-4">{plan.name}</h4>
                            <p className={`text-xs lg:text-base font-normal leading-relaxed lg:leading-snug mb-4 ${plan.mostPopular ? 'text-white' : 'text-gray-400'}`}>{plan.description}</p>
                            <ul className="mb-6">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center mb-2">
                                        <FaCheck className={`${plan.mostPopular ? 'text-white bg-white bg-opacity-10 rounded-full p-1 mr-2' : 'text-secondary bg-gray-200 rounded-full p-1 mr-2'}`} />
                                        <span className='font-normal text-xs lg:text-base'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <button className={`w-full py-3 lg:py-2 text-xs lg:text-base font-semibold rounded-full ${plan.mostPopular ? 'bg-primary text-white' : 'bg-primary bg-opacity-5 text-primary text-opacity-65'}`}>
                                Choose plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Subscription;
