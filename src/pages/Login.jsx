import React from 'react'
import FormLogin from '../components/login/FormLogin'
import PhotoLogin from '../components/login/PhotoLogin'

export default function Login() {
    return (
        <div className="w-full h-screen flex items-center bg-[#0F0F0F] dark">
            <div className="sm:relative w-full sm:w-1/2 h-full flex flex-col">
                <FormLogin/>
            </div>
            <div className="relative w-1/2 h-full sm:flex flex-col hidden">
                <PhotoLogin/>
            </div>
        </div>
    )
}
