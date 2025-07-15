import React from 'react';
import foodAni from '../../utility/Animation/food.json'
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <div className="hero max-h-[700px] bg-red-100 ">
            <div className="hero-content gap-10 flex-col lg:flex-row-reverse px-5">
                <div className='max-w-[300px] md:max-w-[450px] lg:max-w-[650px]'>
                    <Lottie animationData={foodAni} loop={true}></Lottie>
                </div>
                <div className='text-center lg:text-left space-y-5'>
                    <h1 className="text-3xl md:text-5xl font-bold max-w-[550px]">One Click. One Meal. Endless Impact.</h1>
                    <button className="btn btn-primary bg-orange-600">Explore</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;