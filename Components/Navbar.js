import React, { useContext } from "react";
import Image from "next/image";
import Link from 'next/link'
import { AiFillHome, AiFillContacts, AiFillCaretDown } from 'react-icons/ai'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { GiThreeFriends } from 'react-icons/gi'
import { BsFillCameraVideoFill } from 'react-icons/bs'
import { SiAboutdotme } from 'react-icons/si'
import {FaBars} from 'react-icons/fa'
import logo from '../public/images/logo.jpg'
import context from "../Context/Context";
import {IoLogOut} from 'react-icons/io5'
import {AiFillCloseSquare} from 'react-icons/ai'
import OffCanvasNavbar, { CloseOffCanvasNavbar } from "./OffCanvasNavbar";







export default function Navbar() {
	const { user,Logout } = useContext(context)
	return (
		<div id="Nav" className=" border-b-2 border-black w-auto">
			<div className="grid grid-cols-[120px_auto_120px]">
				<div id="logo" className="mr-auto ml-5 my-auto">
					<div className="w-12 h-12">
						<Image className="rounded-md" src={logo} placeholder="blur" />
					</div>
				</div>
				<div id="nav-content">
					<ul className="justify-center my-2 hidden md:flex">
						<Tippy content="Home">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2">
								<Link href="/">
									<a><AiFillHome className="w-5 h-5" /></a>
								</Link>
							</li>
						</Tippy>
						{user?(
							<Tippy content="Logout">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2 cursor-pointer" onClick={Logout}>
								<a >
									<IoLogOut className="w-5 h-5" />
								</a>
							</li>
							</Tippy>
						):(
							<Tippy content="Join Us">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2">
								<Link href="/JoinUsPage">
									<a><GiThreeFriends className="w-5 h-5" /></a>
								</Link>
							</li>
							</Tippy>
						)}
						
						<Tippy content="Videos">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2">
								<Link href="/VideoPage">
									<a><BsFillCameraVideoFill className="w-5 h-5" /></a>
								</Link>
							</li>
						</Tippy>
						<Tippy content="Contact Us">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2">
								<Link href="/ContactPage">
									<a><AiFillContacts className="w-5 h-5" /></a>
								</Link>
							</li>
						</Tippy>
						<Tippy content="About Us">
							<li className="mx-5 my-2 rounded-md border-2 border-black p-2">
								<Link href="/AboutPage">
									<a><SiAboutdotme className="w-5 h-5" /></a>
								</Link>
							</li>
						</Tippy>
					</ul>
				</div>
				<div className="offcanvasbtn md:hidden  flex ml-auto mr-5 my-auto">
					<button className="border-2 border-black p-2 my-4 rounded-md bg-white invert" onClick={()=>{OpenOffCanvasNavbar()}}>
					<FaBars className="h-7 w-7 "/>
					</button>
							
				</div>










				{user ? (
					<>
						<div id="user-dropdown" className="relative hidden md:block" onClick={() => {
										if (document.getElementById('dropdown').style.display === 'block') {
											document.getElementById('dropdown').style.display = 'none'
											
										}
										else {
											document.getElementById('dropdown').style.display = "block"
										}
									}}>
							<div className=" w-full text-start px-2 pr-5 my-auto">
								<div className="grid grid-cols-2  px-2 ">
									<div className="my-4 border-2 border-rose-600 bg-rose-600 text-white pb-2 rounded-full text-center">
										{user.username.slice(0,1)}
									</div>
									<div className="flex justify-center my-auto border-2 cursor-pointer border-black mx-2 rounded-md" >
										<AiFillCaretDown />
									</div>
								</div>
							</div>
							<div id="dropdown" className="absolute bg-gradient-to-b from-gray-900 to-gray-600 w-[200px] right-3 p-2 text-center text-white z-10 hidden">
								<p className="flex flex-wrap break-all my-2">
									<div>
										<b>UserName : </b>
										<div className="text-start">
											{user.username}
										</div>
									</div>

								</p>
								<hr />
								<p className="flex flex-wrap break-all my-2 text-start">
									<div>
										<b>Email : </b>
										<div className="text-start">
											{user.email}
										</div>
										
									</div>

								</p>
								<hr />
								<p className="flex flex-wrap break-all my-2 text-start">
								<div>
										<b>Last Logged In On : </b>
										<div className="text-start">
											{user.last_login_date}
										</div>
										<b> At </b>
										<div className="text-start">
											{user.last_login_time}
										</div>
									</div>

								</p>
								<hr />

							</div>
						</div>

					</>
				) : (
					null
				)}



			</div>
			<div id="offcanvas" className=" absolute   bg-gray-800 z-[20] md:hidden transition-all fade-in-out b4opening">
				<div className="">
				<OffCanvasNavbar/>
				</div>
			</div>
		</div>
	);
}



const OpenOffCanvasNavbar = () => {
	
    document.querySelector('#offcanvas').classList.add('smenu')
	
}