import React from 'react';
import { EnglishLogo } from '../../utility/Logos';
import { FaChevronRight } from "react-icons/fa";

const CardLanguage = () => {
    return (
        <div className='rounded-2xl border-4 p-4 flex justify-between items-center hover:bg-amber-200 cursor-pointer'>
            <div>
                <EnglishLogo></EnglishLogo>
            </div>
            <h4 className='text-2xl font-bold'>English Tutors</h4>
            <FaChevronRight />
        </div>
    );
};

export default CardLanguage;