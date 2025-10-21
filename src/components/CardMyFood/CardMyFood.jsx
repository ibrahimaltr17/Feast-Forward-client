import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CardMyFood = ({ food, setMyFood }) => {
    const { _id, foodName, foodImage } = food;
    const navigate = useNavigate();

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://server-feast-forward.vercel.app/food/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire("Deleted!", "Your food has been deleted.", "success");
                            setMyFood(prev => prev.filter(f => f._id !== _id));
                        }
                    });
            }
        });
    };

    return (
        <div className='bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-64 mx-auto'>
            {/* Food Image */}
            <div className='h-40 w-full overflow-hidden'>
                <img
                    src={foodImage}
                    alt={foodName}
                    className='w-full h-full object-cover transform hover:scale-105 transition duration-300'
                />
            </div>

            {/* Food Name & Actions */}
            <div className='p-4 flex flex-col items-center gap-3'>
                <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-100 text-center'>{foodName}</h3>
                <div className='flex gap-3'>
                    <button
                        onClick={() => navigate(`/updateFood/${_id}`)}
                        className='flex items-center justify-center w-10 h-10 rounded-full bg-green-100 dark:bg-green-600 text-green-600 dark:text-white hover:bg-green-200 dark:hover:bg-green-500 transition'
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className='flex items-center justify-center w-10 h-10 rounded-full bg-red-100 dark:bg-red-600 text-red-600 dark:text-white hover:bg-red-200 dark:hover:bg-red-500 transition'
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardMyFood;
