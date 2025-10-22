import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Fetch recently added foods
const fetchRecentFoods = async () => {
  const res = await axios.get('https://server-feast-forward.vercel.app/availableFoods');
  // Sort by newest first
  return res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6);
};

const RecentFoods = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['recentFoods'],
    queryFn: fetchRecentFoods,
  });

  if (isLoading) return <p className="text-center text-gray-500 mt-10">Loading recently added foods...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error loading data</p>;

  return (
    <div className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
         Recently Added Foods
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map(food => (
          <div
            key={food._id}
            className=" rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-32 object-cover rounded-t-xl"
            />
            <div className="p-4 flex flex-col gap-2">
              <h3 className="text-lg font-semibold ">
                {food.foodName}
              </h3>
              <p className="text-sm ">
                Requested: <span className="font-medium">{food.requestedCount || 0}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentFoods;
