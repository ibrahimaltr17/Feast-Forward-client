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

  if (isLoading) return <p className="text-center text-gray-500 mt-10">Loading most requested foods...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">Error loading data</p>;

  return (
    <div className="my-16 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
        🍽 Most Requested Foods
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.length === 0 && (
          <p className="text-center col-span-full text-gray-500 dark:text-gray-400">
            No requested foods yet.
          </p>
        )}
        {data.map((food) => (
          <div
            key={food._id}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            {/* Food Header */}
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {food.foodName}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Status: <span className="font-medium">{food.status}</span></p>
            </div>

            {/* Requested Count */}
            <div className="mt-auto">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Requested Count: <span className="text-orange-600 dark:text-orange-400">{food.requestedCount}</span>
              </p>
            </div>

            {/* Optional CTA */}
            {/* <button className="mt-4 w-full py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors duration-300">
              Request Now
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostRequestedFoods;
