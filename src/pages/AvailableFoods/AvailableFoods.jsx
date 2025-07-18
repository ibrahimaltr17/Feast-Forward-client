import React, { useEffect, useState } from 'react';
import CardAvailFood from '../../components/CardAvailFood/CardAvailFood';
import axios from 'axios';

const AvailableFoods = () => {
    const [food, setFood]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/availableFoods')
        .then((res)=> setFood(res.data));
    },[])

    return (
        <div className='my-20 space-y-10 mx-auto px-4'>
            <h2 className='text-center text-4xl font-bold'>Available Foods</h2>
            <section className='px-auto grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {food.map(allFood=> (<CardAvailFood key={allFood._id} allFood={allFood}/>))}
            </section>

        </div>
    );
};

export default AvailableFoods;