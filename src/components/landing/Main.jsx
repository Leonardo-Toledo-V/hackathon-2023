import React from 'react'
import Sponsors from '../Sponsors'
import { motion } from "framer-motion"
import { fadeIn } from "../variants.js"

export default function Main() {
    return (
        <div className='w-full'>
            <div
                className='mt-12 flex flex-col'
            >
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}>
                    <p className='text-center font-lato text-lg mx-8 text-[#b71540] xl:text-left lg:text-left'>Justicia para todos </p>
                    <h1 className=' text-[#ffffffca] text-center text-2xl xl:text-8xl font-inter mx-6 uppercase xl:text-left lg:text-left z lg:text-7xl'>Balam<br />
                        <span className='bg-gradient-to-r from-[#e55039] to-[#b71540] text-transparent bg-clip-text text-left font-inter uppercase lg:text-left lg:text-7xl'>transparencia</span></h1>
                    <br />
                </motion.div>
                <div className="bg-[url('/img1.png')] bg-center bg-cover mt-[-1rem] xl:h-[30rem] xl:flex xl:bg-cover lg:h-[22rem]" >
                    <div className='w-[70rem] lg:w-[60rem]'>
                        <motion.h2
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            className='font-inter text-[#ffffffca] text-center uppercase xl:text-left xl:text-8xl lg:text-left mx-6 lg:text-7xl'>en Chiapas</motion.h2>
                    </div>
                    <div className="lg:flex lg:justify-end lg:mt-32">
                        <div className='text-white font-lato text-xl xl:self-end xl:order-1 pb-12 flex xl:ml-20'>
                            <motion.p
                                variants={fadeIn("down", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                className='xl:max-w-sm lg:max-w-sm'>Unidos por Chiapas, transformando la gobernanza con transparencia y apertura para un futuro más justo y equitativo</motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-start mt-44 lg:mt-32'>
                    <div className='w-[37rem] h-[30rem]'>
                        <img className=' w-full h-full object-cover bg-top' src="img2.png" alt="" />
                    </div>
                    <div className='flex flex-col ml-24 mt-12 lg:ml-16'>
                        <div>
                            <motion.h3
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-7xl text-[#ffffffca] uppercase font-inter lg:text-6xl">Un chiapas<br /><span className='text-[#b71540]'>transparente</span></motion.h3>
                        </div>
                        <div className='flex justify-between items-center mt-12 text-[#ffffffca] font-lato text-xl gap-8 lg:text-lg'>
                            <motion.p
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className='max-w-xs lg:w-[300px]'>"Balam, en el lenguaje maya, lleva consigo un significado esencial “el jaguar”.
                                A través de este nombre, nuestra misión es presentar al pueblo chiapaneco cómo la justicia se pone en práctica y cómo el pueblo tiene voz y voto en asuntos de importancia.</motion.p>
                            <motion.p
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className='max-w-xs lg:w-[300px]'>Balam proporciona acceso a información detallada sobre las actividades del gobierno en Chiapas.<br />
                                Ofreciendo una visión completa de cómo se utilizan los recursos públicos para el bienestar de la comunidad chiapaneca.</motion.p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex justify-end mt-44 lg:mt-28'>
                    <div className='flex flex-col ml-12 mt-16 lg:mt-8 lg:mr-10'>
                        <motion.div
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}>
                            <div>
                                <h3 className="text-4xl text-[#ffffffca] uppercase font-inter lg:text-3xl">En Balam, tú
                                    <span className='text-[#b71540]'> decides </span>
                                    y
                                    <span className='text-[#b71540]'> denuncias</span>
                                    , juntos hacemos
                                    <span className='text-[#b71540]'> justicia.</span>
                                </h3>
                            </div>
                        </motion.div>

                        <div>

                            <motion.p
                                className='mt-6 text-[#ffffffca] max-w-3xl font-lato text-xl'
                                variants={fadeIn("up", 0.1)}
                                initial="hidden"
                                whileInView={"show"}>Nuestra misión es mostrar al pueblo chiapaneco cómo se practica la justicia y cómo pueden ejercer su voz y voto. Queremos ser un puente entre las instituciones de justicia y la comunidad, proporcionando educación y recursos para que las personas entiendan sus derechos y participen en la toma de decisiones que los afectan. <br /><br />Chiapas merece una justicia accesible y participativa, y trabajamos para hacerlo posible.</motion.p>
                        </div>
                    </div>
                    <div className='w-[45rem] h-[25rem]'>
                        <img className='object-cover w-full h-full' src="img3.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='py-32'>
                <Sponsors />
            </div>
        </div>
    )
};
