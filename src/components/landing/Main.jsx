import React from 'react'

export default function Main() {
    return (
        <div className='w-full'>
            <div className='mt-12'>
                <h1 className='text-[#13322B] text-center xl:text-left text-2xl xl:text-8xl font-inter mx-6'>KAAJ TUUL</h1>
            </div>
            <div className="bg-[url('/img1.png')] xl:h-[28rem] bg-center bg-cover xl:flex" >
                <div className='xl:max-w-5xl pt-2'>
                    <h2 className='xl:text-7xl font-inter text-white mx-6 tracking-widest text-center xl:text-left  '>TRANSPARENCIA EN CHIAPAS</h2>
                </div>
                <div className='text-white font-lato text-xl xl:self-end xl:order-1 pb-12'>
                    <p className='xl:max-w-sm'>Unidos por Chiapas, transformando la gobernanza con transparencia y apertura para un futuro más justo y equitativo</p>
                </div>
            </div>
        </div>
    )
}
