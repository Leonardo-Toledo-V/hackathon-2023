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
                            <List title="Noticia 1" subtitle="Conoce más" defaultContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel tortor porta augue bibendum scelerisque quis vel est. Nam nec ligula non purus rutrum rutrum pretium at ipsum. Fusce malesuada, sapien in blandit dictum, arcu ante tincidunt nisi, id efficitur nulla augue et lacus. In vel accumsan leo. Nam semper lectus sit amet lacus elementum finibus. Fusce hendrerit eu nisl non feugiat. Morbi feugiat ultrices massa, non condimentum mi varius vitae. Sed vestibulum ex erat, a posuere ligula mattis vel. Nunc placerat purus massa, id pellentesque mi consequat mattis. Fusce luctus nulla ut nisl hendrerit molestie sed at libero." />
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