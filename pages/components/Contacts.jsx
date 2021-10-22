import React from 'react'
import Message from "../../public/img/message.svg"
import Image from "next/image"

function Contacts() {
    return (
        <section className="bg-gradient-to-r from-blue-200   to-blue-100">
            <div className="min-h-screen container mx-auto ">
                <div className=" flex items-center justify-center " >
                    <div className=" text-3xl text-gray-700 pt-20 pb-20  items-center  ">Let's discuss</div>
                </div>
                <div className="flex justify-center flex-col md:flex-row items-center ">
                    <div className="p-20">
                        <div className=" max-w-96 h-auto">
                            <Image className=" w-full h-auto " src={Message} ></Image>

                        </div>
                    </div>
                    <div className="p-20 ">
                        <form onSubmit={(e)=> e.preventDefault()} className=" flex flex-col w-full md:w-96 ">
                            <label className="text-gray-800 pb-1 ">Name</label>
                            <input className=" mb-2 h-8 pl-2 bg-yellow-50 rounded-sm "  type="text" />
                            <label className="text-gray-800 pb-1">Email</label>
                            <input className=" mb-2 h-8 pl-2 bg-yellow-50  rounded-sm " type="text" type="text" />
                            <label className="text-gray-800 pb-1">Message</label>
                            <textarea className=" mb-2 pl-2 bg-yellow-50  rounded-sm h-32 " type="text" ></textarea>
                            <button className="bg-green-500 rounded-md text-white cursor-pointer mt-5 hover:bg-green-600 transition duration-500 ">Send</button>
                        </form>
                    </div>

                </div>
            </div>
            
        </section>
    )
}

export default Contacts
