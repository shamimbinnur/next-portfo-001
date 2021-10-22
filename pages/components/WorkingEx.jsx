import React from 'react'
import Image from "next/image"
import Exp from "../../public/img/exp.svg"

function WorkingEx() {
    return (
        <section  className="bg-gradient-to-r from-blue-100 border-b-2 border-purple-400   to-blue-50">
          <div className="container mx-auto flex flex-col md:flex-row-reverse items-center justify-center min-h-screen">
            <div className="m-2 ">
                <h2 className="text-2xl"> 
                <span className="inline-block mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                </svg>
                </span>
                Working Experience ?
                </h2>
                <div className="max-w-md mt-5 p-5  text-xl border-l-4 border-pink-400 ">
                Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Aliquid, quam mollitia recusandae
                 
                 <br/>
                 <br/>
                 2018-19 : dolor sit amet consectetur
                 <br />
                 2021-19 : Boom habji jabi xD
                 <br />
              </div>
            </div>
            <div className="m-2">
                <div className="w-96 h-96 p-6 md:mr-9 " >
                 
                  <Image src={Exp}  className="w-full h-full" />

                </div>
            </div>
          </div>
        </section>
    )
}

export default WorkingEx
