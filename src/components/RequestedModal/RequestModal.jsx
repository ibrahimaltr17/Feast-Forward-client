import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';

const RequestModal = ({ food, user, additionalNotes, setAdditionalNotes, onSubmit }) => {
    const modalRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);

    const handleSubmit = async () => {
        await onSubmit(); 
        navigate('/availableFood'); 
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
                    <p><strong>Pickup Location:</strong> {food.location}</p>
                    <p><strong>Expire Date:</strong> {food.expiry}</p>
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
                    <button onClick={handleSubmit} className="btn bg-orange-600 text-white hover:bg-orange-700">Submit Request</button>
                </div>
            </div>
        </dialog>
    );
};

export default RequestModal;
