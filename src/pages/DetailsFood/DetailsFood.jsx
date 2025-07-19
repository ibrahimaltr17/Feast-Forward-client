import React from 'react';
import { useLoaderData } from 'react-router';

const DetailsFood = () => {
    const foodData = useLoaderData()
    console.log(foodData)
    return (
        <div className='p-5 w-11/12 mx-auto space-y-10 pt-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div className='px-4'>
                    <img className='md:max-w-96 rounded-2xl' src={foodData.data.foodImage} alt="Event" />
                </div>
                <div className='space-y-4 w-full'>
                    <h2 className='md:text-3xl lg:text-5xl text-2xl font-bold'>{foodData.data.foodName}</h2>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Quantity</p>
                        <p className='text-gray-600 font-semibold'>{foodData.data.quantity}</p>
                    </div>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Expire Date</p>
                        <p className='text-gray-600 font-semibold'>{foodData.data.expiry}</p>
                    </div>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Location</p>
                        <p className='text-gray-600 font-semibold'>{foodData.data.location}</p>
                    </div>
                    <div className='p-2 rounded-md'>
                        <p className='font-bold'>Note</p>
                        <p>{foodData.data.notes}</p>
                    </div>
                </div>
            </div>
            <div>
                <button className='btn w-full cursor-pointer bg-orange-600 font-bold text-white'>Request For Food</button>
            </div>
        </div>
    );
};

export default DetailsFood;