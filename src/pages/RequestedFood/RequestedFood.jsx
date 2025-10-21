import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const RequestedFood = () => {
  const { user } = useContext(AuthContext);
  const [requestedFoods, setRequestedFoods] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = await user.getIdToken();
      const res = await axios.get('https://server-feast-forward.vercel.app/myRequestedFoods', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setRequestedFoods(res.data);
    };

    if (user) {
      fetchData();
    }
  }, [user]);

  return (
    <div className="p-4 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        My Requested Foods
      </h2>

      <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <table className="table w-full text-left border-collapse">
          <thead className="bg-orange-100 dark:bg-orange-800 text-gray-700 dark:text-gray-200">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">#</th>
              <th className="px-4 py-3">Donor Name</th>
              <th className="px-4 py-3">Pickup Location</th>
              <th className="px-4 py-3">Expire Date</th>
              <th className="px-4 py-3 rounded-tr-lg">Request Date</th>
            </tr>
          </thead>
          <tbody>
            {requestedFoods.length > 0 ? (
              requestedFoods.map((item, index) => (
                <tr
                  key={item._id}
                  className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                >
                  <td className="px-4 py-3 font-medium">{index + 1}</td>
                  <td className="px-4 py-3">{item.donorName}</td>
                  <td className="px-4 py-3">{item.pickupLocation}</td>
                  <td className="px-4 py-3">
                    {item.expireDate ? new Date(item.expireDate).toLocaleString() : 'N/A'}
                  </td>
                  <td className="px-4 py-3">
                    {item.requestDate ? new Date(item.requestDate).toLocaleString() : 'N/A'}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-4 py-6 text-center text-gray-500 dark:text-gray-400">
                  No requested foods found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedFood;
