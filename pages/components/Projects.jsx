import React from 'react'
import Image from "next/image"
import UI1 from "../../public/img/ui01.png"
import UI2 from "../../public/img/ui02.png"
import UI3 from "../../public/img/ui03.jpg"
import UI4 from "../../public/img/ui04.png"
import UI5 from "../../public/img/ui05.png"
import UI6 from "../../public/img/ui06.png"
import UI7 from "../../public/img/ui07.jpg"



function Projects() {
    return (
        <section className="bg-gradient-to-r from-blue-200   to-blue-100">
            <div className="min-h-screen container pb-10 mx-auto">
                <div className=" flex items-center justify-center pt-20 pb-20 ">
                    <span>
                        <svg className=" w-16 h-16 text-gray-700 mr-3 " xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                        </svg>
                    </span>
                    <div className="text-3xl   font-medium text-gray-700">My Recent Works</div>


                </div>
                <div className="grid md:grid-cols-3 lg:grid-cols-4 ml-2 mr-2 gap-2 md:gap-4 ">
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI2}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 01</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI1}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 02</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI3}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 03</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI4}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 04</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI5}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 05</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI6}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 06</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI7}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 07</div>
                    </div>
                    <div className="w-92 mb-3 h-52 flex justify-center  items-center relative overflow-hidden bg-white shadow-md ring-purple-200 hover:ring-4 ring-2 rounded-md ">
                        <Image  src={UI3}></Image>
                        <div className=" absolute opacity-0 hover:opacity-100 transition ease-in duration-200  hover:show cursor-pointer text-gray-700 font-bold text-3xl backdrop-filter backdrop-blur-lg text-center pt-28 pb-28 w-full " >Project 08</div>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Projects
