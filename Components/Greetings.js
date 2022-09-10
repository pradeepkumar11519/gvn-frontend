import Image from 'next/image'
import React from 'react'
import home2 from '../public/images/home2.jpg'
import omen from '../public/images/omen.png'
import me from '../public/images/me2.jpg'
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';


export default function Greetings() {
    return (
        <>
            
                <div className="flex flex-col text-center w-full ">
                    <Zoom>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
                    </Zoom>
                    <Zoom>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">What Ever It Takes To Do Tried To Make The Best Ever Possible.</p>
                    </Zoom>
                </div>
                
                <div className='md:grid grid-cols-3'>
                    <Bounce>
                    <div className="p-2  w-full">
                        <div className="h-full flex items-center border-black border p-4 rounded-lg">
                            <div className='md:w-24 h-20 md:h-24 w-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'>
                            <Image alt="team" className="rounded-full h-fit" src={home2} placeholder="blur" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Gaurav V Navada</h2>
                                <p className="text-gray-500">Youtuber</p>
                            </div>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce>
                    <div className="p-2  w-full">
                        <div className="h-full flex items-center border-black border p-4 rounded-lg">
                            <div className='md:h-24 h-20 md:w-24 w-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'>
                            <Image src={me} placeholder="blur" alt="team" className="  rounded-full "  /></div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Pradeep Kumar</h2>
                                <p className="text-gray-500">Web Developer</p>
                            </div>
                        </div>
                    </div>
                    </Bounce>
                    <Bounce>
                    <div className="p-2 w-full">
                        <div className="h-full flex items-center border-black border p-4 rounded-lg ">
                            <div className='md:h-24 h-20 md:w-24 w-20 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4'>
                            <Image alt="team" className="rounded-full " src={omen} placeholder="blur" />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 title-font font-medium">Omen Gaming Laptop</h2>
                                <p className="text-gray-500">Coding Purpose</p>
                            </div>
                        </div>
                    </div>
                    </Bounce>
                </div>
                
            </>
            )
}
