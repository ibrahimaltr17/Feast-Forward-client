import React from 'react';
import foodAni from '../../utility/Animation/food.json';
import Lottie from 'lottie-react';

const Banner = () => {
    return (
        <section className="hero bg-yellow-50 dark:bg-gray-900 max-h-[750px]">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 px-5 md:px-12 lg:px-20 py-12">

                {/* Lottie Animation */}
                <div className="max-w-[350px] md:max-w-[500px] lg:max-w-[650px] mx-auto lg:mx-0 rounded-lg ">
                    <Lottie animationData={foodAni} loop={true} />
                </div>

                {/* Text Content */}
                <div className="text-center lg:text-left space-y-5 flex-1">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 max-w-lg mx-auto lg:mx-0">
                        One Click. One Meal. Endless Impact.
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl max-w-md mx-auto lg:mx-0">
                        Explore delicious meals near you, share your own recipes, and make a difference in the community.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-4">
                        <a href="/availableFood" className="btn bg-orange-600 text-white hover:bg-orange-700">
                            Explore Foods
                        </a>
                        <a href="/addFood" className="btn btn-outline text-orange-600 border-orange-600 hover:bg-orange-600 hover:text-white">
                            Add Your Food
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
