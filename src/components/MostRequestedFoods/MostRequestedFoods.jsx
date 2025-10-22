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

  if (isLoading)
    return (
      <p className="text-center text-gray-500 mt-10">
        Loading most requested foods...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 mt-10">Error loading data</p>
    );

  return (
    <div className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
        🍽 Most Requested Foods
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {data.length === 0 && (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
            No requested foods yet.
          </p>
        )}

        {data.map((food) => (
          <div
            key={food._id}
            className=" dark:bg-gray-500 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center p-3"
          >
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-24 object-cover rounded-lg mb-2"
            />
            <h3 className="text-sm font-semibold  text-center">
              {food.foodName}
            </h3>
            <p className="text-xs text-orange-600 dark:text-orange-400 mt-1">
              Requested: {food.requestedCount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRequestedFoods;
