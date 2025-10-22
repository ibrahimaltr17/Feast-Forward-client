import React from 'react';
import { Link } from 'react-router';

const CardFood = ({ topFood }) => {

    return (
        <div className="card  w-full max-w-sm mx-auto rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">

            {/* Food Image */}
            <figure className="h-52 overflow-hidden">
                <img
                    src={topFood.foodImage}
                    alt={topFood.foodName}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
            </figure>

            {/* Card Body */}
            <div className="card-body p-5">
                <h2 className="card-title text-xl md:text-2xl font-bold ">
                    {topFood.foodName}
                </h2>

                {/* Food Info */}
                <p className=" mt-2 font-medium">
                    Quantity: {topFood.quantity}
                </p>
                <p className=" font-medium">
                    Location: {topFood.location} {topFood.pickupLocation ? `(${topFood.pickupLocation})` : ''}
                </p>
                <p className=" font-medium">
                    Donor: {topFood.donorName}
                </p>

                {/* Actions */}
                <div className="card-actions justify-end mt-4">
                    <Link to={`/details/${topFood._id}`}>
                        <button className="btn bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 transition-colors duration-300 rounded-md">
                            View Details
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardFood;
