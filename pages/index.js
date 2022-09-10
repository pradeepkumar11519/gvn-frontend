import Head from "next/head";
import Image from "next/image";

import home1 from "../public/images/home1.jpg";
import home3 from '../public/images/home3.jpeg'
import Subscribers from "../Components/Subscribers";
import axios from "axios";
import Zoom from 'react-reveal/Zoom';
import Bounce from 'react-reveal/Bounce';
import Greetings from "../Components/Greetings";
export default function Home() {
	return (
		<div className=" ">
			<div className="lg:grid grid-cols-2 ">



				<div className="">
					<div className="m-4 p-4 max-h-[550px]  mx-auto   max-w-[550px]">
					<Zoom>
						<Image src={home1} placeholder="blur" />
					</Zoom>
					</div>
				</div>



				<div className=" my-auto mx-5 ">
				<Bounce>
					<h1 className="text-center text-3xl xl:text-5xl font-medium">Welcome To GVN Vines</h1>
				</Bounce>
				<Bounce>
					<h3 className="text-center text-xl xl:text-3xl my-3">Join Us By Supporting Our Community</h3>
				</Bounce>
				<Bounce>
					<h5 className="text-center text-md xl:text-xl  my-3 font-bold">Do Have A Look At Our Videos</h5>
				</Bounce>
				</div>



			</div>

			<hr className="bg-black h-1 my-10"/>
			<div className="mb-16">
				<div>
				<Bounce>
					<h1 className="font-bold lg:text-4xl text-2xl text-center ">Our Success Story</h1>
					</Bounce>
				</div>
				<Zoom>
				<Subscribers/>
				</Zoom>
				<Zoom>
				<div className="relative m-10">
				
				<Image layout="responsive" src={home3} placeholder="blur"/>
				
				</div>
				</Zoom>
			</div>
			
			<hr className="h-1 bg-black"/>
			<div className="my-16">
				<Greetings/>
			</div>
		</div>
	);
}
