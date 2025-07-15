import React from 'react';
import { EnglishLogo, SpanishLogo } from '../../utility/Logos';
import CardLanguage from '../CardLanguage/CardLanguage';

const ContainerLanguage = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-20'>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
            <CardLanguage></CardLanguage>
        </div>
    );
};

export default ContainerLanguage;