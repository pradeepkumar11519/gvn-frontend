import React from 'react'
import Image from 'next/image'
import contact1 from '../public/images/contact2.jpeg'
import axios from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useState } from 'react'
import ScaleLoader from 'react-spinners/ScaleLoader'
export default function ContactPage() {
  const [contactvalues,setcontactvalues] = useState({name:null,email:null,message:null})
  const {mutate,isLoading} = useContactUS()
  const onSubmit = (e) =>{
    e.preventDefault()
    mutate({name:e.target.name.value,email:e.target.email.value,message:e.target.message.value})
  }
  return (
    <div>
      <section className=" body-font relative ">
        <div className="container px-5   md:grid grid-cols-2 justify-center mx-auto">
          <div className=" justify-center  mx-auto w-full h-full">
            <Image className='h-full'  src={contact1} placeholder="blur" />
            
          </div>
          <div className=" bg-white flex flex-col md:ml-auto w-full md:px-20 py-5">
            <h2 className="text-gray-900 text-3xl  mb-5 font-medium title-font">Contact Us</h2>
            <p className="leading-relaxed mb-5 ">Feel Free to Contact Us Any Queries We Are Ready to Answer it</p>
            <form onSubmit={onSubmit}>
            <div className="relative mb-4">
             
              <label htmlFor="name" className="leading-7 text-sm ">Name</label>
              <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm ">Email</label>
              <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"  />
            </div>
            <div className="relative mb-4">
              <label htmlFor="message" className="leading-7 text-sm ">Message</label>
              <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
            </div>
            <button disabled={isLoading} type="submit" className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{isLoading?<ScaleLoader/>:"Submit"}</button>
            </form>
            <p className="text-xs text-gray-500 mt-3"></p>
          </div>
        </div>
      </section>
    </div>
  )
}


const ContactUs = async (user) =>{
  console.log(user);
  return axios.post('https://gvn-backend-gvn-backend.herokuapp.com/api/v1/ContactUs/',user)
}


const useContactUS = () =>{
  
  return useMutation(ContactUs,{
    onSuccess:()=>{
      toast.success('Your Query Is Submitted We Will Approach You Soon')
    },
    onError:()=>{
      toast.error('Your Query Couldnt Be Submitted Due To Server Error')
    }
  })
}
