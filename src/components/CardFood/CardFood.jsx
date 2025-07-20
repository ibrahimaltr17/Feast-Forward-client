import React from 'react';
import { Link, Navigate } from 'react-router';

const CardFood = ({ topFood }) => {
    console.log(topFood)
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src={topFood.foodImage}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{topFood.foodName}</h2>

                <div className="card-actions justify-between items-center">
                    <p className='font-semibold text-gray-500'>Quantity: {topFood.quantity}</p>
                    <Link to={`/details/${topFood._id}`}>
                        <button className="btn btn-primary bg-orange-600">View Details</button>
                    </Link>


                </div>
            </div>
        </div>
    );
};

export default CardFood;