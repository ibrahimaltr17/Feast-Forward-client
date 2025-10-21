import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const RequestModal = ({ food, user, additionalNotes, setAdditionalNotes, onSubmit }) => {
    const modalRef = useRef(null);
    const navigate = useNavigate();
    const [requestQuantity, setRequestQuantity] = useState(1); // default 1

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);

    const handleSubmit = async () => {
        if (requestQuantity < 1 || requestQuantity > food.quantity) {
            Swal.fire({
                icon: 'warning',
                title: 'Invalid Quantity',
                text: `Please enter a quantity between 1 and ${food.quantity}`,
            });
            return;
        }

        try {
            await onSubmit(requestQuantity); // Pass quantity to parent
            modalRef.current.close();

            // SweetAlert success
            await Swal.fire({
                icon: 'success',
                title: 'Request Submitted!',
                text: `You successfully requested ${requestQuantity} ${food.foodName}(s).`,
                showConfirmButton: true,
            });

            // Refresh AvailableFoods page
            navigate('/availableFood', { replace: true });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'Request Failed',
                text: error.response?.data?.message || 'Something went wrong',
                showConfirmButton: true,
            });
        }
    };

    return (
        <dialog id="my_modal_1" className="modal" ref={modalRef}>
            <div className="modal-box max-w-2xl">
                <h3 className="font-bold text-lg mb-4">Request Food</h3>
                <div className="space-y-2 text-left">
                    <p><strong>Food Name:</strong> {food.foodName}</p>
                    <p><strong>Food ID:</strong> {food._id}</p>
                    <p><strong>Food Donator:</strong> {food.donorName}</p>
                    <p><strong>Your Email:</strong> {user?.email}</p>
                    <p><strong>Request Date:</strong> {new Date().toLocaleString()}</p>
                    <p><strong>Available Quantity:</strong> {food.quantity}</p>

                    <label className="block font-semibold mt-2">Select Quantity:</label>
                    <input
                        type="number"
                        min={1}
                        max={food.quantity}
                        value={requestQuantity}
                        onChange={(e) => setRequestQuantity(Number(e.target.value))}
                        className="input input-bordered w-full"
                    />

                    <label className="block font-semibold mt-2">Additional Notes:</label>
                    <textarea
                        value={additionalNotes}
                        onChange={(e) => setAdditionalNotes(e.target.value)}
                        className="textarea textarea-bordered w-full"
                        placeholder="Enter any notes..."
                        rows={3}
                    ></textarea>
                </div>

                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn btn-outline mr-2">Cancel</button>
                    </form>
                    <button
                        onClick={handleSubmit}
                        className="btn bg-orange-600 text-white hover:bg-orange-700"
                    >
                        Submit Request
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default RequestModal;
