import React from 'react'
import FormRegister from '../components/register/FormRegister'
import PhotoLogin from '../components/login/PhotoLogin'

export default function Register() {
    return (
        <div className="w-full h-screen flex items-center bg-[#0F0F0F] dark">
            <div className="relative w-1/2 h-full sm:flex flex-col hidden">
                <PhotoLogin name="img3"/>
            </div>
            <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
                <FormRegister/>
            </div>
        </div>
    )
}
