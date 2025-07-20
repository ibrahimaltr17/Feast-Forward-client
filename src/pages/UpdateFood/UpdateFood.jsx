import { useLoaderData, useNavigate } from 'react-router';
import { useState } from 'react';
import axios from 'axios';

const formatDateTimeLocal = (dateStr) => {
  const date = new Date(dateStr);
  return date.toISOString().slice(0, 16);
};

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate = useNavigate();
  const [foodData, setFoodData] = useState({
    ...food,
    expiredDate: formatDateTimeLocal(food.expiredDate || food.expiry || new Date()),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://server-feast-forward.vercel.app/food/${food._id}`, foodData);
      alert('Food updated');
      navigate('/myFood');
    } catch (err) {
      console.error(err);
      alert(err?.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="my-10 px-4 max-w-xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Update Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="foodName" value={foodData.foodName} onChange={handleChange} placeholder="Food Name" className="input input-bordered w-full" />
        <input name="foodImage" value={foodData.foodImage} onChange={handleChange} placeholder="Image URL" className="input input-bordered w-full" />
        <input type="number" name="quantity" value={foodData.quantity} onChange={handleChange} placeholder="Quantity" className="input input-bordered w-full" />
        <input name="location" value={foodData.location} onChange={handleChange} placeholder="Pickup Location" className="input input-bordered w-full" />
        <input type="datetime-local" name="expiredDate" value={foodData.expiredDate} onChange={handleChange} className="input input-bordered w-full" />
        <textarea name="notes" value={foodData.notes} onChange={handleChange} placeholder="Notes" className="textarea textarea-bordered w-full" />
        <button className="btn bg-orange-500 btn-primary w-full">Update</button>
      </form>
    </div>
  );
};

export default UpdateFood;
