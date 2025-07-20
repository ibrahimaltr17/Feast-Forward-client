import React, { useEffect, useState } from 'react';
import CardFood from '../CardFood/CardFood';
import axios from 'axios';
import { Link } from 'react-router';

const ContainerFood = () => {
    const [featuredFoods, setFeaturedFoods] = useState([])

    useEffect(() => {
        axios.get('https://server-feast-forward.vercel.app/featuredFoods')
            .then((res) => setFeaturedFoods(res.data));
    }, [])

    return (
        <section className='my-10 space-y-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {featuredFoods.map(topFood => (<CardFood key={topFood._id} topFood={topFood} />))}
            </div>
            <div className='flex justify-center'>
                <Link to='/availableFood'>
                    <button className='btn bg-orange-600 text-white font-bold'>Show All</button>
                </Link>
            </div>
        </section>
    );
};

export default ContainerFood;