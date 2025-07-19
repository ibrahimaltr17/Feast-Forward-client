import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import CardMyFood from '../../components/CardMyFood/CardMyFood';

const MyFood = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    const [myFood, setMyFood]=useState([])
    console.log(myFood)

    useEffect(()=>{
        axios.get('http://localhost:3000/myFood', {
                headers: {
                    Authorization: `Bearer ${user?.accessToken}`
                }
            }).then((res)=> setMyFood(res.data));
    }, [user])

    return (
        <div className='my-20 px-4 space-y-10'>
            <h1 className='text-3xl text-center font-bold'>Manage Food</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {myFood.map((food)=> (<CardMyFood key={food._id} food={food}></CardMyFood>))}
            </div>
        </div>
    );
};

export default MyFood;