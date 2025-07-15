import React from 'react';

const CardTutor = () => {
    return (
        <div className='border-2 rounded-2xl p-3 flex justify-between gap-5'>
            <div>
                <img src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" className='max-w-[200px] rounded-2xl' />
            </div>
            <div>
                <h4 className='text-xl font-bold'>Name</h4>
                <h5 className='font-semibold'>Language</h5>
                <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi quia officia cum explicabo iste, tempore earum ullam eum id ipsam tempora deleniti quo nesciunt facilis aspernatur quam, quis fuga.</p>
            </div>
        </div>
    );
};

export default CardTutor;