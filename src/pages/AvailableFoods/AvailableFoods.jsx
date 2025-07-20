import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';
import CardAvailFood from '../../components/CardAvailFood/CardAvailFood';

const AvailableFoods = () => {
    const [food, setFood] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isThreeCol, setIsThreeCol] = useState(true);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get('https://server-feast-forward.vercel.app/availableFoods')
            .then((res) => setFood(res.data));
    }, []);

    const handleToggleLayout = () => {
        setIsThreeCol(prev => !prev);
    };

    const filteredFood = food.filter(item =>
        item.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='my-20 space-y-10 mx-auto px-4 '>
            <h2 className='text-center text-4xl font-bold'>Available Foods</h2>
            <div className="flex flex-col items-center justify-between space-y-5 gap-4 mx-auto mb-4">
                <input
                    type="text"
                    placeholder="Search by food name"
                    className="input input-bordered  md:w-1/2"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="btn btn-sm bg-green-500 text-white hover:bg-green-600"
                    onClick={handleToggleLayout}
                >
                    Change Layout
                </button>
            </div>

            <section className={`grid gap-4 ${isThreeCol ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {filteredFood.length > 0 ? (
                    filteredFood.map(allFood => (
                        <CardAvailFood key={allFood._id} allFood={allFood} />
                    ))
                ) : (
                    <p className='text-center col-span-full text-gray-500 text-xl'>No food found with that name.</p>
                )}
            </section>
        </div>
    );
};

export default AvailableFoods;
