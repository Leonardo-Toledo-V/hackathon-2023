import React from 'react'
import Sponsors from '../Sponsors'

export default function Main() {
    return (
        <div className='w-full'>
            <div>
                <div className='mt-20'>
                    <h1 className='text-[#13322B] text-center xl:text-left text-2xl xl:text-8xl font-inter mx-6'>KAAJ TUUL</h1>
                </div>
                <div className="bg-[url('/img1.png')] xl:h-[30rem] bg-center bg-cover xl:flex" >
                    <div className='xl:max-w-5xl pt-2'>
                        <h2 className='xl:text-[5rem] leading-none font-inter text-white mx-6 tracking-widest text-center xl:text-left  '>TRANSPARENCIA EN CHIAPAS</h2>
                    </div>
                    <div className='text-white font-lato text-xl xl:self-end xl:order-1 pb-12'>
                        <p className='xl:max-w-sm'>Unidos por Chiapas, transformando la gobernanza con transparencia y apertura para un futuro más justo y equitativo</p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-start mt-24'>
                    <div className='w-[37rem] h-[30rem]'>
                        <img className='object-cover w-full h-full' src="img2.png" alt="" />
                    </div>
                    <div className='flex flex-col ml-24 mt-12'>
                        <div>
                            <h3 className="text-6xl text-[#2C2C2C] uppercase font-inter">Un chiapas<br /><span className='text-[#C63F26]'>transparente</span></h3>
                        </div>
                        <div className='flex justify-between items-center mt-12 text-[#2c2c2cb7] font-lato text-xl gap-8'>
                            <p className='max-w-xs'>"Kaaj Tuul, en el lenguaje maya, lleva consigo un significado esencial: 'la ley'.
                                A través de este nombre, nuestra misión es presentar al pueblo chiapaneco cómo la justicia se pone en práctica y el como el pueblo tiene voz y voto.</p>
                            <p className='max-w-xs'>Kaaj Tuul proporciona acceso a información detallada sobre las actividades del gobierno en Chiapas.<br />
                                Ofreciendo una visión completa de cómo se utilizan los recursos públicos para el bienestar de la comunidad chiapaneca.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-end mt-24'>
                    <div className='flex flex-col ml-12 mt-20'>
                        <div>
                            <h3 className="text-4xl text-[#2C2C2C] uppercase font-inter">En 'Kaaj Tuul', tú
                                <span className='text-[#C63F26]'> decides </span>
                                y
                                <span className='text-[#C63F26]'> denuncias</span>
                                , juntos hacemos
                                <span className='text-[#C63F26]'> justicia.</span>
                            </h3>
                        </div>
                        <div>
                            <p className='mt-12 text-[#2c2c2cb7] max-w-3xl font-lato text-xl'>Nuestra misión es mostrar al pueblo chiapaneco cómo se practica la justicia y cómo pueden ejercer su voz y voto. Queremos ser un puente entre las instituciones de justicia y la comunidad, proporcionando educación y recursos para que las personas entiendan sus derechos y participen en la toma de decisiones que los afectan. <br/><br/>Chiapas merece una justicia accesible y participativa, y trabajamos para hacerlo posible.</p>
                        </div>
                    </div>
                    <div className='w-[45rem] h-[25rem]'>
                        <img className='object-cover w-full h-full' src="img3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='py-16'>
                <Sponsors/>
            </div>
        </div>
    )
};
