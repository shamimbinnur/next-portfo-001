import React from 'react'
import Working from "../../public/img/working.png"
import Working2 from "../../public/img/working2.svg"
import Image from 'next/image'


function Services() {
    return (
        <section  className="bg-gradient-to-r from-blue-50 border-b-2 border-purple-400   to-blue-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-screen">
            <div className="m-2 ">
              <h2 className="text-2xl">
                <span className="inline-block mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clip-rule="evenodd" />
                  </svg>
                </span>
                What I serve ?
                </h2>
                <div className="max-w-md mt-5 p-5  text-xl border-l-4 border-green-400  ">
                Lorem ipsum, dolor sit amet consectetur
                 adipisicing elit. Aliquid, quam mollitia recusandae
                 hic nulla facilis voluptatum magni, volu
              </div>
            </div>
            <div className="m-2">
                <div className="w-96 h-96 p-6 md:ml-9 " >
                 
                  <Image src={Working2}  className="w-full h-full" />

                </div>
            </div>
          </div>
        </section>
    )
}

export default Services
