import React from 'react'
import Sponsors from '../Sponsors'
import { motion } from "framer-motion"
import { fadeIn } from "../variants.js"
import ScrollTrigger from 'react-scroll-trigger'
import CountUp from 'react-countup'
import CardComponent from './Card.jsx'


export default function Main() {
    const [count, setCount] = React.useState(false);

    return (
        <div className='w-full'>
            <div className='mt-12 flex flex-col'>
                <motion.div
                    variants={fadeIn("up", 0.1)}
                    initial="hidden"
                    whileInView={"show"}>
                    <p className='font-lato text-lg mx-6 sm:mx-8 text-[#b71540] text-left '>Justicia para todos </p>
                    <h1 className='text-2xl text-[#ffffffca] xl:text-8xl font-inter mx-6 uppercase xl:text-left lg:text-left z lg:text-7xl md:text-left z md:text-6xl sm:text-5xl'>Balam<br />
                        <span className='text-2xl bg-gradient-to-r from-[#e55039] to-[#b71540] text-transparent bg-clip-text text-left font-inter uppercase lg:text-left xl:text-8xl lg:text-7xl sm:text-5xl md:text-6xl'>transparencia</span></h1>
                    <br />
                </motion.div>
                <div className="bg-[url('/img1.png')] bg-center bg-cover mt-[-1rem] xl:h-[30rem] xl:flex xl:bg-cover lg:h-[22rem]" >
                    <div className='w-[17rem] xl:w-[70rem] lg:w-[60rem] md:w-[45rem] sm:w-[30rem]'>
                        <motion.h2
                            variants={fadeIn("up", 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            className='font-inter text-[#ffffffca] uppercase text-left text-2xl xl:text-8xl mx-6 lg:text-7xl md:text-6xl sm:text-5xl'>en Chiapas</motion.h2>
                    </div>
                    <div className="flex justify-end mt-20 lg:flex lg:justify-end lg:mt-32 md:flex md:justify-end md:mt-32 sm:flex sm:justify-end sm:mt-20">
                        <div className='text-white font-lato text-xl ml-10 xl:self-end xl:order-1 pb-12 flex xl:ml-20 md:ml-20 sm:ml-16'>
                            <motion.p
                                variants={fadeIn("down", 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                className='max-w-sm text-xs xl:text-lg'>Unidos por Chiapas, transformando la gobernanza con transparencia y apertura para un futuro más justo y equitativo</motion.p>
                            {/* xl:max-w-sm lg:max-w-sm md:max-w-sm sm:max-w-sm */}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className='mt-12'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 w-full place-items-center'>
                        <CardComponent>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <h1 className='text-white font-inter'>
                                    <span className='text-md bg-gradient-to-r from-[#e55039] to-[#b71540] text-transparent bg-clip-text text-left font-inter uppercase lg:text-left xl:text-5xl lg:text-2xl sm:text-lg md:text-xl'>{count && <CountUp start={0} end={100} duration={2} delay={0} />} +</span></h1>
                            </ScrollTrigger>
                        </CardComponent>
                        <CardComponent>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <h1 className='text-white font-inter'>
                                    <span className='text-md bg-gradient-to-r from-[#e55039] to-[#b71540] text-transparent bg-clip-text text-left font-inter uppercase lg:text-left xl:text-5xl lg:text-2xl sm:text-lg md:text-xl'>{count && <CountUp start={0} end={91} duration={2} delay={0} />} %</span></h1>
                            </ScrollTrigger>
                        </CardComponent>
                        <CardComponent>
                            <ScrollTrigger onEnter={() => setCount(true)} onExit={() => setCount(false)}>
                                <h1 className='text-white font-inter'>
                                    <span className='text-md bg-gradient-to-r from-[#e55039] to-[#b71540] text-transparent bg-clip-text text-left font-inter uppercase lg:text-left xl:text-5xl lg:text-2xl sm:text-lg md:text-xl'>$ {count && <CountUp start={0} end={100} duration={2} delay={0} />}</span></h1>
                            </ScrollTrigger>
                        </CardComponent>
                    </div>
                </div>
                <div className='flex justify-center xl:justify-start mt-24 xl:mt-44 lg:mt-32 md:mt-28 sm:mt-24'>
                    <div className='sm:w-[37rem] sm:h-[30rem] hidden sm:block'>
                        <img className=' xl:w-full xl:h-full object-cover bg-top sm:w-[400px] sm:h-[480px] md:w-[450px] md:h-[530px]' src="img2.png" alt="" />
                    </div>
                    <div className='flex flex-col w-full ml-8 xl:ml-24 xl:mt-12 lg:ml-16 md:mt-6 md:ml-14 sm:ml-8 sm:mt-8'>
                        <div>
                            <motion.h3
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className="text-2xl xl:text-7xl text-[#ffffffca] uppercase font-inter lg:text-6xl md:text-5xl sm:text-3xl">Un chiapas<span className='text-[#b71540]'> transparente</span></motion.h3>
                        </div>
                        <div className='mt-10 sm:flex sm:justify-between sm:items-center xl:mt-12 text-[#ffffffca] font-lato text-xl gap-8 lg:text-lg md:mr-3 sm:gap-6 sm:mt-10'>
                            <motion.p
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className='mr-8 xl:max-w-xs lg:w-[45%] md:w-[40%] sm:w-[170px] sm:text-base md:text-xl lg:text-xl'>"Balam, en el lenguaje maya, lleva consigo un significado esencial “el jaguar”.
                                A través de este nombre, nuestra misión es presentar al pueblo chiapaneco cómo la justicia se pone en práctica y cómo el pueblo tiene voz y voto en asuntos de importancia.</motion.p>
                            <motion.p
                                variants={fadeIn("down", 0.1)}
                                initial="hidden"
                                whileInView={"show"}
                                className='mt-5 mr-8 xl:max-w-xs lg:w-[45%] md:w-[40%] sm:w-[170px] sm:text-base sm:mt-0 md:text-xl lg:text-xl'>Balam proporciona acceso a información detallada sobre las actividades del gobierno en Chiapas.<br />
                                Ofreciendo una visión completa de cómo se utilizan los recursos públicos para el bienestar de la comunidad chiapaneca.</motion.p>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className='flex mt-28 xl:mt-44 lg:mt-28 md:mt-24 sm:mt-20 '>
                    <div className='flex flex-col ml-12 mr-8 xl:ml-12 xl:mt-16 lg:mt-8 lg:mr-10 md:mt-6 md:mr-16 sm:mt-8 sm:mr-12'>
                        <motion.div
                            variants={fadeIn("up", 0.1)}
                            initial="hidden"
                            whileInView={"show"}>
                            <div>
                                <h3 className="text-3xl text-[#ffffffca] uppercase font-inter lg:text-3xl md:text-2xl">En Balam, tú
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
                                className='mt-6 text-[#ffffffca] max-w-3xl font-lato text-xl md:text-lg sm:text-base'
                                variants={fadeIn("up", 0.1)}
                                initial="hidden"
                                whileInView={"show"}>Nuestra misión es mostrar al pueblo chiapaneco cómo se practica la justicia y cómo pueden ejercer su voz y voto. Queremos ser un puente entre las instituciones de justicia y la comunidad, proporcionando educación y recursos para que las personas entiendan sus derechos y participen en la toma de decisiones que los afectan. <br /><br />Chiapas merece una justicia accesible y participativa, y trabajamos para hacerlo posible.</motion.p>
                        </div>
                    </div>
                    <div className='sm:flex justify-end w-[45rem] h-[30rem] hidden'>
                        <img className='object-cover w-full h-full lg:w-[400px] ' src="img3.png" alt="" />
                    </div>
                </div>
            </div>


            <div className='py-32'>
                <Sponsors />
            </div>
        </div>
    )
};
