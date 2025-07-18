import React from 'react';
import CardFood from '../CardFood/CardFood';

const ContainerFood = () => {
    return (
        <section className='my-10 space-y-10 '>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <CardFood></CardFood>
                <CardFood></CardFood>
                <CardFood></CardFood>
                <CardFood></CardFood>
                <CardFood></CardFood>
                <CardFood></CardFood>
            </div>
            <div className='flex justify-center'>
                <button className='btn bg-orange-600 text-white font-bold'>Show All</button>
            </div>
        </section>
    );
};

export default ContainerFood;