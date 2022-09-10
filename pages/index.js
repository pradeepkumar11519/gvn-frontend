import Head from "next/head";
import Image from "next/image";

import home1 from "../public/images/home1.jpg";
import home3 from '../public/images/home3.jpeg'
import Subscribers from "../Components/Subscribers";
import axios from "axios";
export default function Home() {
	return (
		<div className=" ">
			<div className="lg:grid grid-cols-2 ">



				<div className="">
					<div className="m-4 p-4 max-h-[550px]  mx-auto   max-w-[550px]">
						<Image src={home1} placeholder="blur" />
					</div>
				</div>



				<div className=" my-auto mx-5 ">
					<h1 className="text-center text-3xl xl:text-5xl font-medium">Welcome To GVN Vines</h1>
					<h3 className="text-center text-xl xl:text-3xl my-3">Join Us By Supporting Our Community</h3>
					<h5 className="text-center text-md xl:text-xl  my-3 font-bold">Do Have A Look At Our Videos</h5>
				</div>



			</div>

			<hr className="bg-black h-1 my-10"/>
			<div>
				<div>
					<h1 className="font-bold lg:text-4xl text-2xl text-center ">Our Success Story</h1>
				</div>
				<Subscribers/>
				<div className="relative">
				<Image src={home3} placeholder="blur"/>
				</div>
				
			</div>
			<div>
				
			</div>
		</div>
	);
}
