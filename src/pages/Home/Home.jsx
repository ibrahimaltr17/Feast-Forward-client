import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import State from '../../components/State/State';
import Feedback from '../../components/Feedback/Feedback';
import ContainerFood from '../../components/ContainerFood/ContainerFood';
import { AuthContext } from '../../context/AuthContext';
import MostRequestedFoods from '../../components/MostRequestedFoods/MostRequestedFoods';
import RecentFoods from '../../components/RecentFoods/RecentFoods';

const Home = () => {
    const {user}= useContext(AuthContext);
    console.log(user)
    return (
        <div className='space-y-20'>
            <Banner></Banner>
            <section className='px-4 space-y-20'>
                <ContainerFood></ContainerFood>
                <MostRequestedFoods></MostRequestedFoods>
                <RecentFoods></RecentFoods>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;