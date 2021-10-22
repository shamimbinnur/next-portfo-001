import React from 'react'
import U1 from "../../public/img/ui02.png"
import Image from "next/image"

function Testimonials() {
    return (
        <section className="bg-gradient-to-r from-purple-100 border-b-2 border-purple-400  to-purple-300">
            <div className="min-h-screen container mx-auto">
                <div className=" flex items-center justify-center " >
                    <span>
                        <svg className=" w-16 h-16 text-gray-700  " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                        </svg>
                        
                    </span>
                    <div className=" text-3xl text-gray-700 pt-20 pb-20  items-center  ">Testomonials</div>
                </div>
                
                <div className="grid grid-cols-1 gap-4 p-3  md:grid-cols-3 ">
                   

                    <div  className=" bg-blue-100 md:w-96   shadow-lg rounded-3xl flex flex-col p-10 ">
                        <div  className="md:flex ring-1 bg-gray-600 min-52  mx-auto  overflow-hidden  rounded-full">
                            <img className="  w-full h-full  mx-auto "  src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                        </div>
                        <div>
                            <p className=" text-gray-700 break-words text-xl mt-5 mb-5">" 
                           This is absolute dummy text, I really dunno what to write here, whatever I writing nonsense! "
                                </p>
                            <h1 className="text-gray-700 text-xl">Russel Sord</h1>
                            <h3 className="text-gray-700 text-md">CEO, Foogle</h3>
                        </div>
                    </div>

                    <div  className=" bg-blue-100 md:w-96   shadow-lg rounded-3xl flex flex-col p-10 ">
                        <div  className="md:flex ring-1 bg-gray-600 min-52  mx-auto  overflow-hidden  rounded-full">
                            <img className="  w-full h-full  mx-auto "  src="https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                        </div>
                        <div>
                            <p className=" text-gray-700 break-words text-xl mt-5 mb-5">" 
                           This is absolute dummy text, I really dunno what to write here, whatever I writing nonsense! "
                                </p>
                            <h1 className="text-gray-700 text-xl">Keu Lie</h1>
                            <h3 className="text-gray-700 text-md">CEO, Omega IT</h3>
                        </div>
                    </div>

                    <div   className=" bg-blue-100 md:w-96    shadow-lg rounded-3xl flex flex-col p-10 ">
                        <div  className="md:flex ring-1 bg-gray-600 min-w-52 mx-auto  overflow-hidden  rounded-full">
                            <img className="  w-full h-full  mx-auto "  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" />
                        </div>
                        <div>
                            <p className=" text-gray-700 text-xl break-words mt-5 mb-5">" 
                           This is absolute dummy text, I really dunno what to write here, whatever I writing nonsense! "</p>
                            <h1 className="text-gray-700 text-xl">Davin Josep</h1>
                            <h3 className="text-gray-700 text-md">CEO, VitaTech</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
