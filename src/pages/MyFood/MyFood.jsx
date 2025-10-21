import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import CardMyFood from '../../components/CardMyFood/CardMyFood';

const MyFood = () => {
    const { user } = useContext(AuthContext)
    const [myFood, setMyFood] = useState([])

    useEffect(() => {
        axios.get('https://server-feast-forward.vercel.app/myFood', {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        }).then((res) => setMyFood(res.data));
    }, [user])

    return (
        <div className='my-20 px-4 space-y-10 max-w-7xl mx-auto'>
            <h1 className='text-4xl text-center font-bold text-gray-800 dark:text-gray-100'>
                Manage Your Food Donations
            </h1>
            {myFood.length > 0 ? (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {myFood.map((food) => (
                        <CardMyFood key={food._id} setMyFood={setMyFood} food={food} />
                    ))}
                </div>
            ) : (
                <p className='text-center text-gray-500 dark:text-gray-400 text-xl mt-10'>
                    No foods added yet. Add some to see them here.
                </p>
            )}
        </div>
    );
};

export default MyFood;
