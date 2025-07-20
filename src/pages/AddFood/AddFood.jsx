import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import { showError, showSuccess } from '../../utility/sweetAlert';

const AddFood = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    foodName: '',
    foodImage: '',
    quantity: '',
    location: '',
    expiry: '',
    notes: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFood = {
      ...formData,
      donorName: user?.displayName || 'Anonymous',
      donorEmail: user?.email || '',
      donorImage: user?.photoURL || '',
      status: 'available', // default
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axios.post('https://server-feast-forward.vercel.app/addFood', newFood);
      console.log(res.data);
      showSuccess('Done','Your food Added')
    } catch (error) {
      showError('Ooops',error)
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">Add Food Donation</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Food Name</label>
          <input type="text" name="foodName" required value={formData.foodName}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Food Image URL</label>
          <input type="url" name="foodImage" required value={formData.foodImage}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200">Quantity</label>
            <input type="number" name="quantity" min="1" required value={formData.quantity}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>

          <div>
            <label className="block font-medium text-gray-700 dark:text-gray-200">Pickup Location</label>
            <input type="text" name="location" required value={formData.location}
              onChange={handleChange}
              className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Expiry Date & Time</label>
          <input type="datetime-local" name="expiry" required value={formData.expiry}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-200">Additional Notes</label>
          <textarea name="notes" rows="3" value={formData.notes}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 border rounded-xl bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            placeholder="Anything the receiver should know?" />
        </div>

        <button type="submit"
          className="w-full py-3 mt-4 bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-semibold rounded-xl transition duration-300">
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;