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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newFood = {
      ...formData,
      donorName: user?.displayName || 'Anonymous',
      donorEmail: user?.email || '',
      donorImage: user?.photoURL || '',
      status: 'available',
      createdAt: new Date().toISOString(),
    };

    try {
      const res = await axios.post('https://server-feast-forward.vercel.app/addFood', newFood);
      console.log(res.data);
      showSuccess('Done', 'Your food has been added!');
      setFormData({ foodName: '', foodImage: '', quantity: '', location: '', expiry: '', notes: '' });
    } catch (error) {
      showError('Oops', error.message || 'Something went wrong');
    }
  };

  return (
    <div className="max-w-3xl mx-auto my-14 p-8  shadow-xl rounded-3xl transition-colors duration-300">
      <h2 className="text-3xl font-bold text-orange-500 text-center mb-8 ">
        Add Food Donation
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Food Name */}
        <div>
          <label className="block font-semibold  mb-1">Food Name</label>
          <input
            type="text"
            name="foodName"
            required
            value={formData.foodName}
            onChange={handleChange}
            placeholder="e.g., Fried Rice"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Food Image */}
        <div>
          <label className="block font-semibold  mb-1">Food Image URL</label>
          <input
            type="url"
            name="foodImage"
            required
            value={formData.foodImage}
            onChange={handleChange}
            placeholder="Paste the image URL"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Quantity & Location */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold  mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              min="1"
              required
              value={formData.quantity}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>
          <div>
            <label className="block font-semibold  mb-1">Pickup Location</label>
            <input
              type="text"
              name="location"
              required
              value={formData.location}
              onChange={handleChange}
              className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
            />
          </div>
        </div>

        {/* Expiry Date */}
        <div>
          <label className="block font-semibold  mb-1">Expiry Date & Time</label>
          <input
            type="datetime-local"
            name="expiry"
            required
            value={formData.expiry}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Notes */}
        <div>
          <label className="block font-semibold  mb-1">Additional Notes</label>
          <textarea
            name="notes"
            rows="4"
            value={formData.notes}
            onChange={handleChange}
            placeholder="Any important details for the receiver?"
            className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 transition"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full md:w-auto py-3 px-6 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition duration-300 shadow-md hover:shadow-lg"
        >
          Add Food
        </button>
      </form>
    </div>
  );
};

export default AddFood;
