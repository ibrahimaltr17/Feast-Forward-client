import React, { useEffect, useState } from 'react';
import CardFood from '../CardFood/CardFood';
import axios from 'axios';
import { Link } from 'react-router';

const ContainerFood = () => {
    const [featuredFoods, setFeaturedFoods] = useState([]);

    useEffect(() => {
        axios
            .get('https://server-feast-forward.vercel.app/featuredFoods')
            .then((res) => setFeaturedFoods(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <section className="py-16 dark:bg-gray-900">
            {/* Section Heading */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-orange-600 dark:text-orange-400">
                    Featured Foods
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mt-2 text-lg md:text-xl max-w-2xl mx-auto">
                    Explore our most popular meals curated from our community. Click on any food to see details.
                </p>
            </div>

            {/* Food Cards Grid */}
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredFoods.map((topFood) => (
                        <CardFood key={topFood._id} topFood={topFood} />
                    ))}
                </div>

                {/* Show All Button */}
                <div className="flex justify-center mt-10">
                    <Link to="/availableFood">
                        <button className="btn bg-orange-600 text-white font-bold px-8 py-3 hover:bg-orange-700 transition-colors duration-300">
                            Show All
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContainerFood;
