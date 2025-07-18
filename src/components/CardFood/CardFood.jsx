import React from 'react';

const CardFood = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure>
                <img
                    src="https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2021/09/beef-burger.jpg?im=AspectCrop=(16,9);"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Burger</h2>
                
                <div className="card-actions justify-between items-center">
                    <p>Quantity: 4</p>
                    <button className="btn btn-primary bg-orange-600">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default CardFood;