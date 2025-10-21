import React from 'react';
import { Link } from 'react-router';

const CardAvailFood = ({ allFood }) => {
    // Format expiry date safely
    const expiryDate = !isNaN(Date.parse(allFood.expiry))
        ? new Date(allFood.expiry).toLocaleDateString()
        : allFood.expiry;

    return (
        <div className='bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col md:flex-row gap-4 p-4'>

            {/* Food Image */}
            <div className='w-full md:w-40 h-40 md:h-auto overflow-hidden rounded-xl'>
                <img
                    src={allFood.foodImage}
                    alt={allFood.foodName}
                    className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                />
            </div>

            {/* Food Info */}
            <div className='flex flex-col justify-between gap-2'>
                <div className='flex items-center gap-2'>
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500 animate-pulse"></span>
                    <p className='text-sm font-medium text-green-600 dark:text-green-400'>Available</p>
                </div>

                <h3 className='text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100'>{allFood.foodName}</h3>

                <p className='text-gray-500 dark:text-gray-300 font-medium'>Quantity: {allFood.quantity}</p>
                <p className='text-gray-500 dark:text-gray-300 font-medium'>Location: {allFood.location} {allFood.pickupLocation ? `(${allFood.pickupLocation})` : ''}</p>
                <p className='text-red-600 dark:text-red-400 font-semibold'>Expiry: {expiryDate}</p>
                <p className='text-gray-700 dark:text-gray-200 font-medium'>Donor: {allFood.donorName}</p>

                <Link to={`/details/${allFood._id}`} className='mt-3'>
                    <button className='btn bg-orange-600 hover:bg-orange-700 text-white w-full md:w-auto transition-colors duration-300 rounded-md'>
                        View Details
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default CardAvailFood;
