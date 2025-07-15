import React from 'react';
import Banner from '../../components/Banner/Banner';
import State from '../../components/State/State';
import ContainerLanguage from '../../components/ContainerLanguage/ContainerLanguage';
import Feedback from '../../components/Feedback/Feedback';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <section className='px-4'>
                <State></State>
                <ContainerLanguage></ContainerLanguage>
                <Feedback></Feedback>
            </section>
        </div>
    );
};

export default Home;