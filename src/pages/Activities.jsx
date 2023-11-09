import React from 'react'
import Header from '../components/landing/Navbar'
import List from '../components/lists/Accordion'

const Activities = () => {
    return (
        <>
            <Header />
            <div className="bg-[#ebe0d4]">
                <div className='mb-10 mt-10'>
                    <div className='w-full h-[300px] bg-[url(./assets/activitiesimg1.png)] bg-cover'>
                        <p className='font-inter pt-[70px] ml-10 text-white text-7xl uppercase'>Actividades de la secretarias de salud</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className='w-[900px] flex text-sm mb-4 mt-5'>
                        <div>
                            <div className='bg-[url(./assets/listsimg8.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./assets/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Secretaria de educación" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./assets/listsimg4.png)] w-[700px] h-[1px] ml-5'></div>
                            <p className='ml-8 mt-3'>25 de agosto del 2022 - 8 de Noviembre del 2023</p>
                        </div>
                    </div>

                    <div className='w-[900px] flex text-sm mb-4 mt-10'>
                        <div>
                            <div className='bg-[url(./assets/listsimg8.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./assets/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Secretaria de educación" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./assets/listsimg4.png)] w-[700px] h-[1px] ml-5'></div>
                            <p className='ml-8 mt-3'>25 de agosto del 2022 - 8 de Noviembre del 2023</p>
                        </div>
                    </div>

                    <div className='w-[900px] flex text-sm mb-4 mt-10'>
                        <div>
                            <div className='bg-[url(./assets/listsimg8.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./assets/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Secretaria de educación" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./assets/listsimg4.png)] w-[700px] h-[1px] ml-5'></div>
                            <p className='ml-8 mt-3'>25 de agosto del 2022 - 8 de Noviembre del 2023</p>
                        </div>
                    </div>

                    <div className='w-[900px] flex text-sm mb-10 mt-10'>
                        <div>
                            <div className='bg-[url(./assets/listsimg8.jpg)] w-[200px] h-[140px] bg-cover mr-5'></div>
                        </div>

                        <div>
                            <div className='bg-[url(./assets/listsimg3.png)] w-[1px] h-[140px] bg-cover'></div>
                        </div>

                        <div>
                            <List title="Secretaria de educación" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./assets/listsimg4.png)] w-[700px] h-[1px] ml-5'></div>
                            <p className='ml-8 mt-3'>25 de agosto del 2022 - 8 de Noviembre del 2023</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Activities