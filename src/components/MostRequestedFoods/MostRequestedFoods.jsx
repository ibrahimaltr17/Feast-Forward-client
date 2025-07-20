import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchMostRequestedFoods = async () => {
  const res = await axios.get('https://server-feast-forward.vercel.app/mostRequestedFoods');
  return res.data;
};

const MostRequestedFoods = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['mostRequestedFoods'],
    queryFn: fetchMostRequestedFoods,
  });

  if (isLoading) return <p>Loading most requested foods...</p>;
  if (error) return <p>Error loading data</p>;

  return (
    <div className="most-requested-foods-section">
      <h2 className="text-2xl font-bold mb-4">Most Requested Foods</h2>
      <ul>
        {data.length === 0 && <li>No requested foods yet.</li>}
        {data.map(food => (
          <li key={food._id} className="mb-3 border p-3 rounded">
            <h3 className="font-semibold">{food.foodName}</h3>
            <p>Requested Count: {food.requestedCount}</p>
            <p>Status: {food.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostRequestedFoods;
