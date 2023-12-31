import React from 'react'
import Header from '../components/landing/Navbar'
import List from '../components/lists/Accordion'
import Sponsors from '../components/Sponsors'
import Footer from '../components/footer/Footer'
import Likes from '../components/activities/Buttons'
import axios from "../libs/axios"
import { useEffect, useState } from "react";

const Activities = () => {

    const [datas, setDatas] = useState([{}])

    useEffect(() => {
        axios.get('/file/all')
            .then(function (response) {
                setData(response.data)
            }).catch(function (err) {
                console.log(err)
            });
    }, [])

    return (
        <>
            <Header />
            <div className="bg-[#0F0F0F] dark">
                <div className='mb-10'>
                    <div className='w-full h-[300px] bg-[url(./andres/activitiesimg1.png)] bg-cover bg-center flex justify-center'>
                        <h1 className='pt-24 ml-10 font-inter text-white text-7xl uppercase'>Actividades</h1>
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    {
                        datas.map((data, key) => {
                            if (data.length >= 1) {
                                return (
                                    <div className='w-[900px] flex text-sm mb-2'>
                                        <div>
                                            <div className='bg-[url(./andres/activities2.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                                        </div>
    
                                        <div>
                                            <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                                        </div>
    
                                        <div>
                                            <List title={data.title} subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>
                                            <a href={data.url} className='text-white'></a>
                                            <Likes />
                                        </div>
                                    </div>
                                )

                            }
                           
                        })
                    }


                    <div className='w-[900px] flex text-sm mb-2'>
                        <div>
                            <div className='bg-[url(./andres/activities2.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Nuevo hospital en Suchiapa" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>

                            <Likes />
                        </div>
                    </div>


                    <div className='w-[900px] flex text-sm mb-4 mt-10'>
                        <div>
                            <div className='bg-[url(./andres/activities3.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Campaña de salud en Tuxtla Chico" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>

                            <Likes />
                        </div>
                    </div>

                    <div className='w-[900px] flex text-sm mb-4 mt-10'>
                        <div>
                            <div className='bg-[url(./andres/activities4.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Nueva clinica de la mujera en San Fernando" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>

                            <Likes />
                        </div>
                    </div>

                    <div className='w-[900px] flex text-sm mb-10 mt-10'>
                        <div>
                            <div className='bg-[url(./andres/activities5.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Campaña educación sexual en Suchiapa" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>

                            <Likes />
                        </div>
                    </div>

                </div>
                <div className='py-32'>
                    <Sponsors />
                </div>
                <Footer />

            </div>

        </>
    )
}

export default Activities