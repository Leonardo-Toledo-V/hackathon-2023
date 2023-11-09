import React from 'react'
import Header from '../components/landing/Navbar'
import List from '../components/lists/Accordion'

const Lists = () => {
    return (
        <>
            <Header />
            <div className="bg-[#EBE0D4]">
                <div className='mb-10'>
                    <div className='w-full mt-10 h-[300px] bg-[url(./assets/listsimg1.png)] bg-cover'>
                        <p className='font-inter pt-[100px] ml-10 text-white text-7xl uppercase'>Secretarias del estado</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <div className='w-[900px] flex text-sm'>
                        <div className='bg-[url(./assets/listsimg2.png)] w-[200px] h-[70px] mt-3 bg-cover ml-10 mr-10'></div>
                        <div className='bg-[url(./assets/listsimg3.png)] w-[2px] h-[80px]'></div>
                        <List />
                    </div>
                    <div className='bg-[url(./assets/listsimg4.png)] w-[1000px] h-[1px] mt-4'></div>

                    <div className='w-[900px] flex text-sm mt-10'>
                        <div className='bg-[url(./assets/listsimg2.png)] w-[200px] h-[70px] mt-3 bg-cover ml-10 mr-10'></div>
                        <div className='bg-[url(./assets/listsimg3.png)] w-[2px] h-[80px]'></div>
                        <List />
                    </div>
                    <div className='bg-[url(./assets/listsimg4.png)] w-[1000px] h-[1px] mt-4'></div>

                    <div className='w-[900px] flex text-sm mt-10'>
                        <div className='bg-[url(./assets/listsimg2.png)] w-[200px] h-[70px] mt-3 bg-cover ml-10 mr-10'></div>
                        <div className='bg-[url(./assets/listsimg3.png)] w-[2px] h-[80px]'></div>
                        <List />
                    </div>
                    <div className='bg-[url(./assets/listsimg4.png)] w-[1000px] h-[1px] mt-4'></div>

                </div>
            </div>
        </>
    )
}

export default Lists