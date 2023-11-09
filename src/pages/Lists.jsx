import React from 'react'
import Header from '../components/landing/Navbar'
import List from '../components/lists/Accordion'

const Lists = () => {
    return (
        <>
            <Header />
            <div className="bg-[#0F0F0F] dark">
                <div className='mb-10'>
                    <div className='w-full h-[300px] bg-[url(./andres/activitiesimg1.png)] bg-cover bg-center flex justify-center'>
                        <h1 className='font-inter pt-[100px] text-white text-7xl uppercase'>Secretarias del estado</h1>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className='w-[900px] flex text-sm mb-4'>
                        <div className='bg-[url(./andres/listsimg5.svg)] w-[200px] h-[70px] mt-3 bg-cover ml-10 mr-10'></div>
                        <div className='bg-[url(./andres/listsimg3.png)] w-[2px] h-[80px]'></div>
                        <List title="Secretaria de educación" subtitle="Conoce más" defaultContent="Dedicada a la educación"/>
                    </div>
                    <div className='bg-[url(./andres/listsimg3.png)] w-[1000px] h-[1px] mt-4'></div>

                    <div className='w-[900px] flex text-sm mt-10 mb-4'>
                        <div className='bg-[url(./andres/listsimg2.svg)] w-[215px] h-[75px] mt-2 bg-cover ml-8 mr-[40px]'></div>
                        <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[80px]'></div>
                        <List title="Secretaria de salud" subtitle="Conoce más"  defaultContent="Dedicada a la salud"/>
                    </div>
                    <div className='bg-[url(./andres/listsimg3.png)] w-[1000px] h-[1px] mt-4'></div>

                    <div className='w-[900px] flex text-sm mt-8 mb-4'>
                        <div className='bg-[url(./andres/listsimg6.svg)] w-[265px] h-[75px] bg-cover mr-[38px]'></div>
                        <div className='bg-[url(./andres/listsimg3.png)] w-[1px] h-[80px]'></div>
                        <List title="Secretaria de obras públicas" subtitle="Conoce más" defaultContent="Dedicada a las obras públicas" />
                    </div>
                    <div className='bg-[url(./andres/listsimg3.png)] w-[1000px] h-[1px] mt-4'></div>

                    <div className='w-[900px] flex text-sm mt-8 mb-4'>
                        <div className='bg-[url(./andres/listsimg7.svg)] w-[220px] h-[80px] bg-cover ml-8 mr-10'></div>
                        <div className='bg-[url(./andres/listsimg3.png)] w-[2px] h-[80px]'></div>
                        <List title="Secretaria de turismo" subtitle="Conoce más" defaultContent="Dedicada al turismo" />
                    </div>
                    <div className='bg-[url(./andres/listsimg3.png)] w-[1000px] h-[1px] mt-4 mb-10'></div>
                </div>

            </div>
        </>
    )
}

export default Lists