import React from 'react'
import { AiFillCloseSquare } from 'react-icons/ai'
import { AiFillHome, AiFillContacts, AiFillCaretDown } from 'react-icons/ai'
import { GiThreeFriends } from 'react-icons/gi'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import Tippy from '@tippyjs/react'
import Link from 'next/link'
import { useContext } from 'react'
import context from '../Context/Context'
import { IoLogOut } from 'react-icons/io5'






export default function OffCanvasNavbar() {
    const { user, Logout } = useContext(context)
    return (
        <div id='offcanvasmenu' className='mb-3 z-[20] h-full '>
            
            
            <div className='flex flex-col'>
                
                <div className='  justify-end flex'>
                    <AiFillCloseSquare className='m-3 invert h-7 w-7 cursor-pointer' onClick={() => {
                        CloseOffCanvasNavbar()
                    }} />
                </div>
                <hr/>
                <h1 className=' my-3 text-center text-white text-3xl font-bold'>GVN VINES</h1>
                <hr/>
                <div className='my-5'>
                
                <div  className=' text-white mx-2 text-center flex flex-col justify-center '>
                    <div id="userlogo"  className='py-2 rounded-full justify-self-center mx-auto  px-4 border-2 w-fit bg-rose-500 font-bold'>
                        {user?user.username.slice(0,1):'G'}
                    </div>
                    <div className='p-3 break-all'>
                        <b>Username : </b>
                        <div>{user?user.username:"Guest"}</div>
                    </div>
                    <div className='p-3 break-all'>
                        <b>Email : </b>
                        <div>{user?user.email:'Guest@gmail.com'}</div>
                    </div>
                    {user?(
                        <div className='p-3 break-all'>
                        <b>Last Logged In On : </b>
                        <div>{user.last_login_date} 
                        <div><b> At </b></div>
                        {user.last_login_time}</div>
                    </div>
                    ):(
                        null
                    )}
                    
                </div>
                
                </div>
                
                <div className='flex justify-center  '>
                
                    <div  className='w-full'>
                        <ul id="offcanvasul" className="justify-center  w-full px-3">
                        <Link href="/">
                            <div className='cursor-pointer flex my-auto text-white border-x-2 border-t-2 '>
                                <Tippy content="Home">
                                    <li className=" my-5 mx-3 rounded-md border-2 border-white p-2">
                                        
                                            <a><AiFillHome className="w-5 h-5" /></a>
                                        
                                    </li>
                                </Tippy>
                                <h1 className='text-center my-auto mx-auto text-xl font-bold'>Home</h1>
                            </div>
                            </Link>
                           
                                {user ? (
                                    <div className='cursor-pointer flex my-auto text-white border-x-2 border-t-2' onClick={Logout}>
                                    <Tippy content="Logout">
                                        <li className=" my-5 mx-3 rounded-md border-2 border-white p-2 cursor-pointer" >
                                            <a >
                                                <IoLogOut className="w-5 h-5" />
                                            </a>
                                        </li>
                                    </Tippy>
                                    <h1 className='text-center my-auto mx-auto text-xl font-bold'>Logout</h1>
                                    </div>
                                ) : (
                                    <Link href="/JoinUsPage">
                                     <div className='cursor-pointer flex my-auto text-white border-x-2 border-t-2'>
                                    <Tippy content="Join Us">
                                        <li className=" my-5 mx-3 rounded-md border-2 border-white p-2">
                                            
                                                <a><GiThreeFriends className="w-5 h-5" /></a>
                                            
                                        </li>
                                    </Tippy>
                                    <h1 className='text-center my-auto mx-auto text-xl font-bold'>Login</h1>
                                    </div>
                                    </Link>
                                )}
                           
                            <Link href="/VideoPage">
                            <div className='cursor-pointer flex my-auto text-white border-x-2 border-t-2'>
                                <Tippy content="Videos">
                                    <li className=" my-5 mx-3 rounded-md border-2 border-white p-2">
                                        
                                            <a><BsFillCameraVideoFill className="w-5 h-5" /></a>
                                        
                                    </li>
                                </Tippy>
                                <h1 className='text-center my-auto mx-auto text-xl font-bold'>Videos</h1>
                            </div>
                            </Link>
                            <Link href="/ContactPage">
                            <div className='cursor-pointer flex my-auto text-white border-x-2 border-t-2'>
                                <Tippy content="Contact Us">
                                    <li className=" my-5 mx-3 rounded-md border-2 border-white p-2">
                                        
                                            <a><AiFillContacts className="w-5 h-5" /></a>
                                       
                                    </li>
                                </Tippy>
                                <h1 className='text-center my-auto mx-auto text-xl font-bold'>Contact Us</h1>
                            </div>
                            </Link>
                            <Link href="/AboutPage">
                            <div className='cursor-pointer flex my-auto text-white border-2'>
                                <Tippy content="About Us">
                                    <li className=" my-5 mx-3 rounded-md border-2 border-white p-2">
                                        
                                            <a><SiAboutdotme className="w-5 h-5" /></a>
                                        
                                    </li>
                                </Tippy>
                                <h1 className='text-center my-auto mx-auto text-xl font-bold'>About Us</h1>
                            </div>
                            </Link>
                        </ul>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}




export const CloseOffCanvasNavbar = () => {
    document.querySelector('#offcanvas').classList.remove('smenu')    

}