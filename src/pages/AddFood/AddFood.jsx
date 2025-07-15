import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
// import { addDoc, collection } from 'firebase/firestore';
// import { db } from '../../firebase/firebase.init';
// import { useNavigate } from 'react-router';

const AddFood = () => {
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

  const [formData, setFormData] = useState({
    foodName: '',
    foodImage: '',
    quantity: '',
    location: '',
    expiry: '',
    notes: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newFood = {
//       ...formData,
//       donorName: user?.displayName,
//       donorEmail: user?.email,
//       donorImage: user?.photoURL || '',
//       status: 'available',
//       createdAt: new Date(),
//     };

//     try {
//       await addDoc(collection(db, 'food'), newFood);
//       navigate('/foods'); // redirect to available food page
//     } catch (err) {
//       console.error("Error adding food:", err);
//     }
//   };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Add Food Donation</h2>
      <form className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Food Name</label>
          <input type="text" name="foodName" required
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Food Image URL</label>
          <input type="url" name="foodImage" required
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200">Quantity</label>
            <input type="number" name="quantity" min="1" required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200">Pickup Location</label>
            <input type="text" name="location" required
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Expiry Date & Time</label>
          <input type="datetime-local" name="expiry" required
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Additional Notes</label>
          <textarea name="notes" rows="3"
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Anything the receiver should know?" />
        </div>

        <button type="submit"
          className="w-full py-3 mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition duration-300">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
