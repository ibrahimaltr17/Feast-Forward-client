import React, { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import State from '../../components/State/State';
import Feedback from '../../components/Feedback/Feedback';
import ContainerFood from '../../components/ContainerFood/ContainerFood';
import { AuthContext } from '../../context/AuthContext';
import MostRequestedFoods from '../../components/MostRequestedFoods/MostRequestedFoods';

const Home = () => {
    const {user}= useContext(AuthContext);
    console.log(user)
    return (
        <div>
            <Banner></Banner>
            <section className='px-4'>
                <ContainerFood></ContainerFood>
                <MostRequestedFoods></MostRequestedFoods>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;