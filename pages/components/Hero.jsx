import React, { useEffect, useRef, useState } from 'react'
import { init } from 'ityped'
import Me from "../../public/img/me.png"
import Image from "next/image"


function Hero() {

  const titleRef = useRef();
  
  useEffect(() => {
    init(titleRef.current, { showCursor: false, strings: ['UI/UX Designer !', 'App Developer !' ] })

  },[])

    return (
        <section  className=" bg-gradient-to-r from-green-400  to-blue-100 ">
          <div className=" h-screen container  mx-auto">
              <div className="flex h-full flex-col-reverse md:flex-row">
                
              <div className=" flex-2 h-full">
                <div className="flex overflow-hidden h-full ">
                  <Image className="object-cover" src={Me}></Image>
                
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-center content-center h-full ">
                <h4 className="text-gray-700 text-2xl mb-1 mt-10 text-center md:text-4xl">I am</h4>
                
                <h1 className=" text-gray-700 text-4xl mb-1 text-center md:text-7xl font-medium" >Diana Gomz</h1>
                
                <h4 ref={titleRef} className="text-gray-700 h-1 text-2xl mb-10 text-center md:text-4xl"></h4>
              </div>
              </div>   
          </div>
        </section>
    )
}

export default Hero
