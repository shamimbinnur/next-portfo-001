import React from 'react'

function Nav() {
    return (
    <nav className="flex justify-between mt-2 mb-2 items-center " >
            <div className="md:text-4xl text-3xl ml-4  ">Diana<span className="text-red-400">.</span></div>
            <div className="flex flex-col md:flex-row text-xs md:text-sm mr-2 ">
                <div className="flex items-center  " >
                    <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </span>
                    +8001 554 242 88    
                </div>
                <div className="flex  items-center md:ml-3 md:mr-3 ">
                    <span className="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg> 
                    </span>
                    diana@gmail.com
                </div>
            </div>
    </nav>
    )
}

export default Nav
