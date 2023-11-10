import { PaperClipIcon } from '@heroicons/react/20/solid'

export default function Data() {
    return (
        <div className='w-full'>
            <div className='flex justify-center w-full md:grid md:grid-cols-2 mb-10'>
                <div className="md:px-4 sm:px-0">
                    <h3 className="text-sm sm:text-lg text-center font-inter text-gray-100">Applicant Information</h3>
                    <p className="text-xs mt-1 max-w-2xl sm:text-sm text-center text-[#A0A0A0] font-lato">Personal details and application.</p>
                </div>

                <div className='hidden md:block ml-[40%]'>
                    <button className='px-8 py-2 rounded-full bg-[#FFF27A] text-[#18181A] md:mt-2'>Enviar</button>
                </div>
            </div>

            <div className="mt-6 border-solid border-2 rounded-xl border-[#36373E] bg-[#18181A] sm:px-10 sm:py-3 px-5 py-2">
                    <div className="py-6 sm:px-4 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Full name</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="text" />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Application for</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="text" />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Email address</dt>
                        <input  className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="text" />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Expectations</dt>
                        <input className='mt-5 bg-[#18181A] w-full text-white border-b-1 border-[#858585] sm:h-10 sm:mt-2' type="text" />
                    </div>

                    <div className="sm:px-4 py-6 sm:py-10 md:px-0 md:py-5">
                        <dt className="text-sm font-medium leading-6 text-gray-100">About</dt>
                        <textarea name="" id="" cols="30" rows="10" className='w-[99%] mt-5 bg-[#101010] rounded-lg border-1 border-[#36373E] text-white'></textarea>
                    </div>
                    
                    {/* <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <dt className="text-sm font-medium leading-6 text-gray-100">Attachments</dt>
                        <dd className="mt-2 text-sm text-gray-100 sm:col-span-2 sm:mt-0">
                            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">resume_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">2.4mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                    <div className="flex w-0 flex-1 items-center">
                                        <PaperClipIcon className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                        <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                            <span className="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                            <span className="flex-shrink-0 text-gray-400">4.5mb</span>
                                        </div>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                            Download
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </dd>
                    </div>
                     */}

                <div className='md:hidden flex justify-center mt-7 mb-7 sm:mt-5'>
                    <button className='px-8 py-2 rounded-full bg-[#FFF27A] text-[#18181A] mr'>Enviar</button>
                </div>
            </div>
        </div>
    )
}
