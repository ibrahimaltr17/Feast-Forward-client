import React from 'react';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const CardMyFood = ({ food, setMyFood }) => {
    const { _id } = food;
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
        <div className='border rounded-3xl p-3 flex gap-3'>
            <div>
                <img className='w-[150px]' src={food.foodImage} alt="" />
            </div>
            <div className='space-y-3'>
                <h3 className='text-2xl font-bold'>{food.foodName}</h3>
                <div className='flex gap-3 w-full'>
                    <button
                        onClick={() => navigate(`/updateFood/${food._id}`)}
                        className="btn text-xl text-green-500"
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={() => handleDelete(_id)}
                        className='btn text-2xl text-red-500'
                    >
                        <MdDeleteForever />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CardMyFood;
