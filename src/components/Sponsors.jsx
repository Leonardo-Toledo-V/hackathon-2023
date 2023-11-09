import React from 'react';
import Marquee from "react-fast-marquee";

export default function Sponsors() {
    return (
        <div className='flex justify-center items-center '>
            <div className='flex justify-center items-center'>
                <Marquee direction='left' speed={50}>
                <img className='w-28 mx-12' src="upgch.png" alt="upgch" />
                <img className='w-44 mx-12' src="chiapas.png" alt="chiapas" />
                <img className='w-44 h-10 mx-12' src="crypto.png" alt="crypto" />
                <img className='w-44 h-14 mx-12' src="innova.png" alt="innova" />
                <img className='w-44 h-14 mx-12' src="bio.png" alt="innova" />
                <img className='w-40 h-14 mx-12' src="vara.png" alt="vara" />
                </Marquee>
            </div>
        </div>
    )
}
