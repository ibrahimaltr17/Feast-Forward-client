import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'; // make sure path is correct

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
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">My Requested Foods</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th>#</th>
              <th>Donor Name</th>
              <th>Pickup Location</th>
              <th>Expire Date</th>
              <th>Request Date</th>
            </tr>
          </thead>
          <tbody>
            {requestedFoods.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.donorName}</td>
                <td>{item.pickupLocation}</td>
                <td>{new Date(item.expireDate).toLocaleString()}</td>
                <td>{item.requestDate ? new Date(item.requestDate).toLocaleString() : 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RequestedFood;
