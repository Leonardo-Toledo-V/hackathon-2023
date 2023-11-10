import React from 'react'
import List from '../components/lists/Accordion'
import LikesTimeLine from '../components/activities/ButtonsTimeLine'
import Header from '../components/landing/Navbar'
import Footer from '../components/footer/Footer'
import Sponsors from '../components/Sponsors'

const TimeLine = () => {
    return (
        <>
            <Header />
            <div className='bg-[#141414]'>
                <div className='flex flex-col w-[700px] text-sm mb-10 dark gap-10 ml-[22%]'>
                    <div className='flex mt-10'>
                        <div className="flex flex-col w-[700px]">
                            <List title="Campaña educación sexual en Suchiapa" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>
                        </div>
                        <div>
                            <LikesTimeLine />
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        <div className="flex flex-col w-[700px]">
                            <List title="Noticia 2" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>
                        </div>
                        <div>
                            <LikesTimeLine />
                        </div>
                    </div>

                    <div className='flex mt-10'>
                        <div className="flex flex-col w-[700px]">
                            <List title="Noticia 3" subtitle="Conoce más" defaultContent="Dedicada a la educación" />
                            <div className='bg-[url(./andres/listsimg3.png)] w-[700px] h-[1px] ml-5'></div>
                            <h3 className='ml-8 mt-3 text-white'>25 de agosto del 2022 - 8 de Noviembre del 2023</h3>
                        </div>
                        <div>
                            <LikesTimeLine />
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

export default TimeLine