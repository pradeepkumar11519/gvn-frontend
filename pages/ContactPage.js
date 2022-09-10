import React from 'react'
import Image from 'next/image'
import contact1 from '../public/images/contact2.jpeg'
export default function ContactPage() {
  return (
    <div>
      <section className=" body-font relative ">
        <div className="container px-5   md:grid grid-cols-2 justify-center mx-auto">
          <div className=" justify-center  mx-auto">
            <Image  src={contact1} placeholder="blur" />
            
          </div>
          <div className=" bg-white flex flex-col md:ml-auto w-full md:px-20 py-5">
            <h2 className="text-gray-900 text-3xl  mb-5 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 ">Feel Free to Contact Us Any Queries We Are Ready to Answer it</p>
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm ">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm ">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm ">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </div>
  )
}
