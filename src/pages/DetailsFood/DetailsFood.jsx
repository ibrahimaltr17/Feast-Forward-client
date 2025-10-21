import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import RequestModal from '../../components/RequestedModal/RequestModal';

const DetailsFood = () => {
    const { user } = useContext(AuthContext);
    const foodData = useLoaderData();
    const [showModal, setShowModal] = useState(false);
    const [additionalNotes, setAdditionalNotes] = useState('');

    const handleRequest = () => {
        axios.patch(`https://server-feast-forward.vercel.app/requestedFood/${foodData._id}`, {
            notes: additionalNotes,
        }, {
            headers: { Authorization: `Bearer ${user.accessToken}` },
        })
            .then(res => {
                console.log(res.data);
                setShowModal(false);
            });
    };

    // Safe date formatting
    const expiryDate = !isNaN(Date.parse(foodData.expiry))
        ? new Date(foodData.expiry).toLocaleDateString()
        : foodData.expiry;

    const requestDate = foodData.requestDate && !isNaN(Date.parse(foodData.requestDate))
        ? new Date(foodData.requestDate).toLocaleString()
        : foodData.requestDate;

    return (
        <div className='p-5 md:p-10 w-11/12 mx-auto space-y-10 pt-24'>
            {/* Food Main Section */}
            <div className='flex flex-col lg:flex-row gap-10 bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10 transition-colors duration-300'>

                {/* Image */}
                <div className='flex-shrink-0'>
                    <img
                        src={foodData.foodImage}
                        alt={foodData.foodName}
                        className='w-full max-w-md rounded-2xl object-cover shadow-lg'
                    />
                </div>

                {/* Info */}
                <div className='flex-1 flex flex-col gap-4'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-gray-100'>{foodData.foodName}</h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Quantity</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.quantity}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Expire Date</p>
                            <p className='text-red-600 dark:text-red-400 font-semibold'>{expiryDate}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Location</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.location}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Pickup Location</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.pickupLocation}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Donor Name</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.donorName}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Donor Email</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.donorEmail}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Status</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.status}</p>
                        </div>
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Requested Count</p>
                            <p className='text-gray-600 dark:text-gray-300 font-semibold'>{foodData.requestedCount}</p>
                        </div>
                        {foodData.requestDate && (
                            <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg'>
                                <p className='font-bold text-gray-700 dark:text-gray-200'>Request Date</p>
                                <p className='text-gray-600 dark:text-gray-300 font-semibold'>{requestDate}</p>
                            </div>
                        )}
                    </div>

                    {/* Notes */}
                    {foodData.notes && (
                        <div className='p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mt-4'>
                            <p className='font-bold text-gray-700 dark:text-gray-200'>Notes</p>
                            <p className='text-gray-600 dark:text-gray-300'>{foodData.notes}</p>
                        </div>
                    )}

                    {/* Request Button */}
                    <button
                        className='btn bg-orange-600 hover:bg-orange-700 text-white font-bold mt-6 w-full md:w-auto transition-colors duration-300'
                        onClick={() => setShowModal(true)}
                    >
                        Request For Food
                    </button>
                </div>
            </div>

            {/* Request Modal */}
            {showModal && (
                <RequestModal
                    food={foodData}
                    user={user}
                    additionalNotes={additionalNotes}
                    setAdditionalNotes={setAdditionalNotes}
                    onSubmit={handleRequest}
                />
            )}
        </div>
    );
};

export default DetailsFood;
