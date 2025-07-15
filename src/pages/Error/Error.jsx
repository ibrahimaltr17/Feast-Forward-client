import React from 'react';
import error from '../../utility/Animation/404Animation.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col gap-3 items-center my-6 bg-white min-h-screen'>
            <div className='w-[400px] mx-auto'>
                <Lottie animationData={error} loop={true}></Lottie>
                <h2 className='text-center text-2xl font-bold'>Opps! Page Not Found</h2>
            </div>

            <Link to='/'>
                <button className='btn w-fit bg-blue-200 border-2'>Back to Home</button>
            </Link>
        </div>
    );
};

export default Error;