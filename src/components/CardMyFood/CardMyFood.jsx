import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const CardMyFood = ({ food }) => {
    console.log(food)
    return (
        <div className='border rounded-3xl p-3 flex'>
            <div>
                <img className='w-[150px]' src={food.foodImage} alt="" />
            </div>
            <div className='space-y-3'>
                <h3 className='text-2xl font-bold'>{food.foodName}</h3>
                <div className='flex gap-3 w-full'>
                    <button className='btn text-xl text-green-500'><FaEdit /></button>
                    <button className='btn text-2xl text-red-500'><MdDeleteForever /></button>
                </div>
            </div>
        </div>
    );
};

export default CardMyFood;