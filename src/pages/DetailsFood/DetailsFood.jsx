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
        axios.patch(`http://localhost:3000/requestedFood/${foodData._id}`, {
            notes: additionalNotes,
        }, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`,
            },
        })
        .then((res) => {
            console.log(res.data);
            setShowModal(false);
        });
    };

    return (
        <div className='p-5 w-11/12 mx-auto space-y-10 pt-20'>
            <div className='flex flex-col lg:flex-row items-center gap-10'>
                <div className='px-4'>
                    <img className='md:max-w-96 rounded-2xl' src={foodData.foodImage} alt="Event" />
                </div>
                <div className='space-y-4 w-full'>
                    <h2 className='md:text-3xl lg:text-5xl text-2xl font-bold'>{foodData.foodName}</h2>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Quantity</p>
                        <p className='text-gray-600 font-semibold'>{foodData.quantity}</p>
                    </div>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Expire Date</p>
                        <p className='text-gray-600 font-semibold'>{foodData.expiry}</p>
                    </div>
                    <div className='p-2 rounded-md w-1/2'>
                        <p className='font-bold'>Location</p>
                        <p className='text-gray-600 font-semibold'>{foodData.location}</p>
                    </div>
                    <div className='p-2 rounded-md'>
                        <p className='font-bold'>Note</p>
                        <p>{foodData.notes}</p>
                    </div>
                </div>
            </div>
            <div>
                <button
                    className='btn w-full bg-orange-600 text-white font-bold'
                    onClick={() => setShowModal(true)}
                >
                    Request For Food
                </button>
            </div>
            
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
