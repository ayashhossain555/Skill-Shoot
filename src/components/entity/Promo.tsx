import React from 'react';
import promoRight from '../../assets/images/promo_right.png';
import orangeCircle from '../../assets/images/orange_circle.svg';
import promoCorner from '../../assets/images/promo_corner.svg';
import greenSquare from '../../assets/images/green_square.svg';
import orangeSquare from '../../assets/images/orange_square.svg';
import smallGreenSquare from '../../assets/images/small_green_square.svg';

const Promo = () => {
    return (
        <div className='container-custom mx-auto my-14 lg:my-40'>
            <div className="bg-[#F4ECE5] flex items-center font-poppins justify-between rounded-lg relative">
                <div className="flex flex-col text-center lg:text-left w-full lg:w-1/2">
                    <img src={promoCorner} className="absolute top-0 left-0 w-12 h-12" alt="Promo Corner" />
                    <div className='p-16 space-y-8'>
                        <h2 className="text-2xl lg:text-4xl font-semibold lg:leading-relaxed">
                            Happy <span className="text-primary">Chinese New Year</span>, 20% discount for you today
                        </h2>
                        <button className="btn bg-secondary text-white text-base lg:text-xl px-6 pt-3 pb-10 font-bold rounded-lg hover:bg-secondary">
                            Subscribe Course
                        </button>
                        <img src={orangeCircle} className="absolute flex lg:hidden bottom-8 left-20 w-8 h-8" alt="Orange Circle" />
                    </div>
                </div>
                <div className="relative hidden w-1/2 lg:flex items-center ">
                    <img src={promoRight} className="absolute left-1/3 -bottom-[165px] w-80 z-10" alt="Promo Right" />
                    <img src={orangeSquare} className="absolute -top-20 right-32 w-14 h-14" alt="Orange Square" />
                    <img src={greenSquare} className="absolute -top-20 left-56 w-14 h-14" alt="Green Square" />
                    <img src={smallGreenSquare} className="absolute -bottom-36 right-40 w-14 h-14" alt="Small Green Square" />
                    <img src={orangeCircle} className="absolute -bottom-28 left-64 w-8 h-8" alt="Orange Circle" />
                </div>
                <img
                    src={promoCorner}
                    className="absolute bottom-0 right-0 w-12 h-12 transform rotate-180"
                    alt="Promo Corner"
                />
            </div>
        </div>
    );
};

export default Promo;
