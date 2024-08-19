import React from 'react';
import Slider from 'react-slick';
import { BsPlayFill } from 'react-icons/bs';
import { FiUser } from "react-icons/fi";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import courseBg1 from '../../assets/images/course_bg_1.png';
import courseBg2 from '../../assets/images/course_bg_2.png';
import courseBg3 from '../../assets/images/course_bg_3.png';
import courseIcon1 from '../../assets/images/course_icon_1.png';
import courseIcon2 from '../../assets/images/course_bg_2.png';
import courseIcon3 from '../../assets/images/course_bg_3.png';
import orangeCircle from '../../assets/images/orange_circle.svg';
import orangeSquare from '../../assets/images/orange_square.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Courses = () => {
    const sliderRef = React.useRef(null);
    const [activeSlide, setActiveSlide] = React.useState(0);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '60px',
                    infinite: true,
                    arrows: false,
                }
            }
        ],
    };

    const courses = [
        {
            title: "Basics of learning team management",
            teacher: "Jone Owel",
            role: "IT Manager",
            participants: 120,
            price: "$120",
            video: "25 Video",
            bg: courseBg1,
            icon: courseIcon1,
        },
        {
            title: "Learn basic database structure",
            teacher: "Raynaldo Jr",
            role: "Data Science",
            participants: 55,
            price: "$180",
            video: "20 Video",
            bg: courseBg2,
            icon: courseIcon2,
        },
        {
            title: "Create dynamic website with basic PHP",
            teacher: "Markus Low",
            role: "Programmer",
            participants: 98,
            price: "$135",
            video: "20 Video",
            bg: courseBg3,
            icon: courseIcon3,
        }
    ];

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="bg-secondary py-16 font-poppins overflow-visible">
            <div className="overflow-visible relative">
                <div className="container-custom text-center mb-12 relative overflow-visible">
                    <h2 className="text-xl lg:text-4xl font-semibold text-white mb-4">
                        Popular courses of the week
                    </h2>
                    <p className="text-gray-300 text-xs lg:text-base font-light opacity-85">
                        List of the most popular lists that are often studied by our members
                    </p>
                    <img src={orangeCircle} className="absolute -top-4 md:top-0 right-20 w-4 h-4 md:w-7 md:h-7" alt="Orange Circle" />
                    <img src={orangeSquare} className="absolute -top-8 md:top-4 left-20 w-7 h-7 md:w-10 md:h-10" alt="Orange Square" />
                </div>
                <div className='mx-0 lg:mx-32 px-0 lg:px-10 relative'>
                    <Slider ref={sliderRef} {...settings}>
                        {courses.map((course, index) => (
                            <div key={index} className="p-4">
                                <div className={`bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 relative flex flex-col min-h-80 lg:min-h-[520px] ${
                                    index !== activeSlide ? 'opacity-50 lg:opacity-100' : ''
                                }`}>
                                    <div className="relative">
                                        <img src={course.bg} className="w-full h-60 object-cover" alt={course.title} />
                                        <div className="absolute inset-0 flex items-center justify-center bg-opacity-25 hover:bg-opacity-75 transition-all duration-300">
                                            <button className="bg-white hover:bg-secondary p-4 rounded-full shadow-lg transition-colors duration-300 group">
                                                <BsPlayFill className="h-8 w-8 text-secondary transition-colors duration-300 group-hover:text-white" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className='flex flex-col items-start justify-between p-6'>
                                            <h3 className="text-base md:text-xl lg:text-2xl font-semibold mb-4">{course.title}</h3>
                                            <div className='flex w-full justify-between'>
                                                <div>
                                                    <div className="flex items-center mb-4">
                                                        <img src={course.icon} className="w-8 h-8 rounded-full mr-3" alt={course.teacher} />
                                                        <div>
                                                            <p className="text-xs lg:text-sm text-gray-700 font-semibold">{course.teacher}</p>
                                                            <p className="text-[8px] lg:text-xs text-gray-500">{course.role}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center mb-4">
                                                    <div className="flex items-center">
                                                        <FiUser className="text-secondary mr-2 w-7 h-7 lg:w-10 lg:h-10" />
                                                        <div>
                                                            <p className="text-gray-700 font-semibold text-sm lg:text-base">{course.participants}</p>
                                                            <p className="text-gray-500 text-[8px] lg:text-xs">Participant</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='bg-[#FAFAFA]'>
                                            <div className='flex items-center justify-between p-6'>
                                                <div>
                                                    <button className="btn w-full py-0 lg:py-2 px-4 lg:px-6 bg-secondary hover:text-secondary text-white text-sm lg:text-xs font-normal hover:font-semibold rounded-lg">
                                                        Buy Now
                                                    </button>
                                                </div>
                                                <p className="text-gray-800 font-medium">
                                                    <span className='text-2xl font-semibold'>
                                                        {course.price}
                                                    </span>
                                                    <span className='opacity-80 text-sm'>
                                                        /{course.video}
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <div className="absolute inset-0 flex justify-between items-center px-4">
                        <button 
                            className="bg-white hover:bg-secondary border-4 p-4 rounded-full shadow-lg transition-all duration-300 group"
                            onClick={goToPrev}
                        >
                            <FaArrowLeft className="group-hover:text-white w-4 h-4" />
                        </button>
                        <button 
                            className="bg-white hover:bg-secondary border-4 p-4 rounded-full shadow-lg transition-all duration-300 group"
                            onClick={goToNext}
                        >
                            <FaArrowRight className="group-hover:text-white w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Courses;
