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

    const handleToggleLayout = () => setIsThreeCol(prev => !prev);

    const filteredFood = food.filter(item =>
        item.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='my-20 space-y-10 mx-auto px-4 max-w-[1400px]'>
            <h2 className='text-center text-4xl font-bold text-orange-600 '>Available Foods</h2>

            {/* Search & Layout Toggle */}
            <div className="flex flex-col items-center justify-between gap-4 md:gap-6">
                <input
                    type="text"
                    placeholder="Search by food name"
                    className="input input-bordered w-full md:w-1/2 max-w-md"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className="btn btn-sm bg-orange-600 hover:bg-orange-700 text-white transition-colors duration-300"
                    onClick={handleToggleLayout}
                >
                    {isThreeCol ? 'Two Column View' : 'Three Column View'}
                </button>
            </div>

            {/* Food Grid */}
            <section className={`grid gap-6 ${isThreeCol ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
                {filteredFood.length > 0 ? (
                    filteredFood.map(allFood => (
                        <CardAvailFood key={allFood._id} allFood={allFood} />
                    ))
                ) : (
                    <p className='text-center col-span-full text-gray-500 dark:text-gray-400 text-xl'>No food found matching your search.</p>
                )}
            </section>
        </div>
    );
};

export default AvailableFoods;
