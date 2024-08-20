import React from 'react';
import ceoImage from '../../assets/images/ceo.png';
import yellowIcon from '../../assets/images/yellow_icon.svg';
import circleIcon from '../../assets/images/circle_icon.svg';
import pyramidIcon from '../../assets/images/pyramid_icon.svg';
import squareIcon from '../../assets/images/square_icon.svg';

const Expertise = () => {
    // Data for stats
    const stats = [
        { value: "100+", label: "Updated Material" },
        { value: "15K", label: "Member Join" },
    ];

    // Data for challenges
    const challenges = [
        {
            icon: squareIcon,
            title: "Material Limitations",
            description: "Limited access to quality resources can hinder the learning process.",
        },
        {
            icon: pyramidIcon,
            title: "Unprofessional Mentor",
            description: "Guidance from inexperienced mentors can lead to poor outcomes.",
        },
        {
            icon: circleIcon,
            title: "Video Quality",
            description: "Low-quality instructional videos can reduce comprehension and retention.",
        },
        {
            icon: yellowIcon,
            title: "High Price",
            description: "Expensive courses can make education inaccessible to many learners.",
        },
    ];

    return (
        // Main container for the Expertise section
        <div className="container-custom mb-28 font-poppins">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-32">
                
                {/* Left section with text and stats */}
                <div className='w-full flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/2 space-y-8'>
                    <h2 className="text-heading-mobile lg:text-heading-desktop font-bold">
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

                {/* Right section with challenges */}
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
