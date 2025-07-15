import React from 'react';
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { FaStarHalfAlt } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { FaUser } from "react-icons/fa";

const State = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 my-10'>
            <div className='bg-blue-200 rounded-2xl px-8 py-4 text-center space-y-3'>
                <LiaChalkboardTeacherSolid className='text-4xl mx-auto'/>
                <p className='font-bold text-2xl'>12</p>
                <h4 className='font-bold'>Total Tutors</h4>
            </div>
            <div className='bg-blue-200 rounded-2xl px-8 py-4 text-center space-y-3'>
                <FaStarHalfAlt className='text-4xl mx-auto'/>
                <p className='font-bold text-2xl'>12</p>
                <h4 className='font-bold'>Total Reviews</h4>
            </div>
            <div className='bg-blue-200 rounded-2xl px-8 py-4 text-center space-y-3'>
                <IoLanguage className='text-4xl mx-auto'/>
                <p className='font-bold text-2xl'>12</p>
                <h4 className='font-bold'>Total Language</h4>
            </div>
            <div className='bg-blue-200 rounded-2xl px-8 py-4 text-center space-y-3'>
                <FaUser className='text-4xl mx-auto'/>
                <p className='font-bold text-2xl'>12</p>
                <h4 className='font-bold'>Total Tutors</h4>
            </div>
        </div>
    );
};

export default State;