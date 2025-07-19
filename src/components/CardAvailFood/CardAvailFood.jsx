import React from 'react';
import { Link } from 'react-router';

const CardAvailFood = ({allFood}) => {
    return (
        <div className='rounded-4xl border p-5 flex justify-between gap-3 w-fit'>
            <div className='rounded-4xl max-w-[150px]'>
                <img className='rounded-4xl' src={allFood.foodImage} alt="" />
            </div>
            <div className='flex flex-col justify-between gap-2'>
                <div className='flex items-center'>
                    <div className="inline-grid *:[grid-area:1/1]">
                        <div className="status status-success animate-ping"></div>
                        <div className="status status-success"></div>
                    </div>
                    <p className='text-xs'>Available</p>
                </div> 
                <h4 className='text-2xl font-bold'>{allFood.foodName}</h4>
                <p className='text-gray-500 font-semibold'>Expire Date: {allFood.expiry}</p>
                <Link to={`/details/${allFood._id}`}>
                <button className='btn bg-orange-600 font-bold text-white'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default CardAvailFood;