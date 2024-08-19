import React from 'react';
import ceoImage from '../../assets/images/ceo.png';
import yellowIcon from '../../assets/images/yellow_icon.svg';
import circleIcon from '../../assets/images/circle_icon.svg';
import pyramidIcon from '../../assets/images/pyramid_icon.svg';
import squareIcon from '../../assets/images/square_icon.svg';

const Expertise = () => {
    const stats = [
        { value: "100+", label: "Updated Material" },
        { value: "15K", label: "Member Join" },
    ];

    const challenges = [
        {
            icon: squareIcon,
            title: "Material Limitations",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            icon: pyramidIcon,
            title: "Unprofessional Mentor",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            icon: circleIcon,
            title: "Video Quality",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            icon: yellowIcon,
            title: "High Price",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
    ];

    return (
        <div className="container-custom py-16 font-poppins">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
                <div className='w-full flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2 space-y-8'>
                    <h2 className="text-2xl lg:text-4xl font-bold mb-4">
                        Why do we <span className="text-primary">exist?</span>
                    </h2>
                    <p className="text-gray-500 mb-6 text-sm lg:text-base leading-normal lg:leading-relaxed">
                        Because we know that many people or companies have the same problem when it comes to how difficult it is to improve their skills
                    </p>
                    <div className="flex items-center text-left mb-6">
                        <img src={ceoImage} className="w-16 h-16 rounded-full mr-4" alt="CEO Image" />
                        <div>
                            <p className="font-bold text-sm lg:text-base">Jerony Pulquosta</p>
                            <p className="text-gray-500 text-xs">CEO Skill Shoot</p>
                        </div>
                    </div>
                    <div className="divider mx-20 lg:mx-0"></div>
                    <div className="flex gap-10">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center lg:text-left">
                                <p className="text-2xl lg:text-4xl font-bold mb-2">{stat.value}</p>
                                <p className="text-gray-500 text-sm">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-8 lg:mt-0">
                    {challenges.map((challenge, index) => (
                        <div key={index} className="flex flex-col text-center lg:text-left items-center lg:items-start space-y-7">
                            <img src={challenge.icon} className="w-12 h-12" alt={challenge.title} />
                            <div>
                                <h3 className="text-lg lg:text-2xl font-bold text-secondary mb-3">{challenge.title}</h3>
                                <p className="text-gray-500 text-base leading-loose px-6 lg:px-0">{challenge.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Expertise;
