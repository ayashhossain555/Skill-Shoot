import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import reviewSquare from '../../assets/images/review_square.svg';
import reviewCircle from '../../assets/images/review_circle.svg';
import reviewHead1 from '../../assets/images/review_head1.png';
import reviewHead2 from '../../assets/images/review_head2.png';
import reviewHead3 from '../../assets/images/review_head3.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Review = () => {
    const sliderRef = React.useRef(null);

    // Initialize activeSlide to the center slide (index 1 in this case)
    const [activeSlide, setActiveSlide] = React.useState(1);

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
                breakpoint: 1024,  // For screens smaller than 1024px
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0',
                },
            },
        ],
    };

    const reviews = [
        {
            name: "Jason Bay",
            review: "I am quite satisfied, because the skills I want or dream of can really be mastered",
            avatar: reviewHead3,
            rating: 5,
        },
        {
            name: "Nany Brugman",
            review: "I am quite satisfied, because the skills I want or dream of can really be mastered",
            avatar: reviewHead2,
            rating: 5,
        },
        {
            name: "Alexa Nowan",
            review: "I am quite satisfied, because the skills I want or dream of can really be mastered",
            avatar: reviewHead1,
            rating: 5,
        },
    ];

    const goToNext = () => {
        sliderRef.current.slickNext();
    };

    const goToPrev = () => {
        sliderRef.current.slickPrev();
    };

    return (
        <div className="bg-[#F8F8F8] py-16 font-poppins">
            <div className="container-custom">
                
                {/* Section Header */}
                <div className="text-center mb-12 relative">
                    <h2 className="text-heading-mobile lg:text-heading-desktop font-semibold mb-4">
                        What do they <span className="text-primary">say?</span>
                    </h2>
                    <p className="text-gray-500 text-xs lg:text-base px-12">
                        This is an honest review from members who have joined us
                    </p>
                    <img src={reviewSquare} className="absolute top-0 left-10 w-7 h-7 lg:hidden" alt="Square Icon" />
                    <img src={reviewCircle} className="absolute top-4 right-10 w-4 h-4 lg:hidden" alt="Circle Icon" />
                </div>

                {/* Slider with Reviews */}
                <Slider ref={sliderRef} {...settings}>
                    {reviews.map((review, index) => (
                        <div key={index} className="p-4">
                            <div className={`${
                                    index === activeSlide ? 'bg-white border-secondary' : 'bg-transparent border-transparent'
                                } border-b-4 rounded-lg transform transition-all duration-300 relative flex flex-col items-center text-center p-6`}>
                                <img src={review.avatar} className="w-20 h-20 rounded-full mb-4" alt={review.name} />
                                <div className="flex justify-center mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <span key={i} className="text-[#FF9100] text-xl">&#9733;</span>
                                    ))}
                                </div>
                                <h3 className="text-lg lg:text-2xl font-normal mb-3">{review.name}</h3>
                                <p className="text-xs lg:text-base text-gray-500">{review.review}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Slider Controls */}
                <div className="flex justify-center mt-6">
                    <div className="flex space-x-6">
                        <button 
                            className="bg-white hover:bg-primary p-4 rounded-full shadow-lg transition-all duration-300 group"
                            onClick={goToPrev}
                        >
                            <FaArrowLeft className="group-hover:text-white w-4 h-4" />
                        </button>
                        <button 
                            className="bg-white hover:bg-primary p-4 rounded-full shadow-lg transition-all duration-300 group"
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

export default Review;
