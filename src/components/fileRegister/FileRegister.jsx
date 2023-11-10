import { PaperClipIcon } from '@heroicons/react/20/solid'
import { useState } from "react";
import axios from "../../libs/axios"

export default function FileRegister() {
    const [file, setFile] = useState();
    const [nameFile, setNameFile] = useState("");
    const [token, setToken] = useState(0);

    const handleSelectFile = (e) => {
        setNameFile(e.target.files[0].name);
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    };

    const handleNameFile = (e) => {
        setNameFile(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setToken(1123)
        if (file) {
            let bodyFormData = new FormData();
            bodyFormData.append('file', file);
            bodyFormData.append('to', token);
            bodyFormData.append('createDate', "2023-11-08");
            let config = {
                method: 'post',
                url: 'http:://192.168.100.63:8080/file/upload',
                headers: {
                    'Authorization': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkb2xmbyIsImlkIjoxLCJpYXQiOjE2OTk1NTM1NDV9.Yh9-blV7PTq837XMXu4KJWma00ShvJSeLAdks3RzOXw",
                },
                data: bodyFormData
            }
            axios(config)
                .then(function (response) {
                    console.log("TODO OKE")
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }else{
            console.log("hey, tu imagen")
        }


    }

    return (
        <div className='w-full'>
            <form onSubmit={handleSubmit}>
                <div className='flex justify-center w-full md:grid md:grid-cols-2 mb-10'>
                    <div className="md:px-4 sm:px-0">
                        <h3 className="text-sm sm:text-lg text-center font-inter text-gray-100">File Info</h3>
                        <p className="text-xs mt-1 max-w-2xl sm:text-sm text-center text-[#A0A0A0] font-lato">Upload a file.</p>
                    </div>

                    <div className='hidden md:block ml-[40%]'>
                        <button className='px-8 py-2 rounded-full bg-[#FFF27A] text-[#18181A] md:mt-2'>Enviar</button>
                    </div>
                </div>

                <div className="mt-6 border-solid border-2 rounded-xl border-[#36373E] bg-[#18181A] sm:px-10 sm:py-3 px-5 py-2">
                    <div className="py-6 sm:px-4 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">File name</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="text" value={nameFile} onChange={handleNameFile} />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">File</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="file" onChange={handleSelectFile} />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Token</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="number" />
                    </div>
                </div>
            </form>
        </div>
    )
}
