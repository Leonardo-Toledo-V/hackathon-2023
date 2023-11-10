import React from 'react'
import Header from './components/landing/Navbar'
import Main from './components/landing/Main'
import Footer from './components/footer/Footer'

function App() {

  return (
    <main className='bg-[#141414] h-full w-full'>
        <Header/>
        <Main/>
        <Footer/>
    </main>
  )
}

export default App
