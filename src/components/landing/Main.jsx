import React from 'react'
import Sponsors from '../Sponsors'
import { motion } from "framer-motion"
import { fadeIn } from "../variants.js"

export default function Main() {
    return (
        <div className='w-full'>
            <div>
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    className='mt-10'>
                    <p className='text-center xl:text-left font-lato text-md mx-8 leading-tight text-[#C63F26]'>Justicia para Chiapas</p>
                    <h1 className=' text-[#2C2C2C] text-center xl:text-left text-2xl xl:text-[6rem] leading-none font-inter mx-6 uppercase'>Balam</h1>
                    <br/><span className='text-[#93311F] text-left text-2xl xl:text-[6rem] leading-5 font-inter mx-6  uppercase'>transparencia<br/></span>
                </motion.div>
                <div className="bg-[url('/img1.png')] xl:h-[33rem] bg-center bg-cover xl:flex" >
                    <div className='w-[70rem] pt-2'>
                        <motion.h2 
                        variants={fadeIn("up", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        className='xl:text-[6rem] leading-none font-inter text-[#2C2C2C] mx-6 text-center xl:text-left uppercase'>en Chiapas</motion.h2>
                    </div>
                    <div className='text-white font-lato text-xl xl:self-end xl:order-1 pb-12'>
                        <motion.p 
                        variants={fadeIn("down", 0.5)}
                        initial="hidden"
                        whileInView={"show"}
                        className='xl:max-w-sm'>Unidos por Chiapas, transformando la gobernanza con transparencia y apertura para un futuro más justo y equitativo</motion.p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-start mt-24'>
                    <div className='w-[37rem] h-[30rem]'>
                        <img className=' w-full h-full object-center' src="img2.png" alt="" />
                    </div>
                    <div className='flex flex-col ml-24 mt-12'>
                        <div>
                            <motion.h3 
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            className="text-7xl text-[#2C2C2C] uppercase font-inter">Un chiapas<br /><span className='text-[#C63F26]'>transparente</span></motion.h3>
                        </div>
                        <div className='flex justify-between items-center mt-12 text-[#2c2c2cb7] font-lato text-xl gap-8'>
                            <motion.p 
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            className='max-w-xs'>"Balam, en el lenguaje maya, lleva consigo un significado esencial “el jaguar”. 
                            A través de este nombre, nuestra misión es presentar al pueblo chiapaneco cómo la justicia se pone en práctica y cómo el pueblo tiene voz y voto en asuntos de importancia.</motion.p>
                            <motion.p 
                            variants={fadeIn("down", 0.1)}
                            initial="hidden"
                            whileInView={"show"}
                            className='max-w-xs'>Balam proporciona acceso a información detallada sobre las actividades del gobierno en Chiapas.<br />
                                Ofreciendo una visión completa de cómo se utilizan los recursos públicos para el bienestar de la comunidad chiapaneca.</motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-end mt-24'>
                    <div className='flex flex-col ml-12 mt-20'>
                        <div>
                            <h3 className="text-4xl text-[#2C2C2C] uppercase font-inter">En Balam, tú
                                <span className='text-[#C63F26]'> decides </span>
                                y
                                <span className='text-[#C63F26]'> denuncias</span>
                                , juntos hacemos
                                <span className='text-[#C63F26]'> justicia.</span>
                            </h3>
                        </div>
                        <div>
                            <p className='mt-12 text-[#2c2c2cb7] max-w-3xl font-lato text-xl'>Nuestra misión es mostrar al pueblo chiapaneco cómo se practica la justicia y cómo pueden ejercer su voz y voto. Queremos ser un puente entre las instituciones de justicia y la comunidad, proporcionando educación y recursos para que las personas entiendan sus derechos y participen en la toma de decisiones que los afectan. <br /><br />Chiapas merece una justicia accesible y participativa, y trabajamos para hacerlo posible.</p>
                        </div>
                    </div>
                    <div className='w-[45rem] h-[25rem]'>
                        <img className='object-cover w-full h-full' src="img3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='py-16'>
                <Sponsors />
            </div>

        </div>
    )
};
