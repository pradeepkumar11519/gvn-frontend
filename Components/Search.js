import { useRouter } from 'next/router'
import React from 'react'
import { useState } from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
export default function Search() {
  const [query,setquery] = useState(null)
  const router = useRouter()
  return (
    <div className='rounded-full'>
      <div className='flex bg-gray-700 rounded-full p-2'>
      <input className='border-0 text-white font-bold relative border-rose-600 w-full p-2 px-3 rounded-l-full  bg-transparent outline-none ' onChange={(e)=>{
        setquery(e.target.value)
      }} type="text" placeholder='Search Here. Alteast 3 Characters Required'/>
      <button disabled={!(query?.length>3) || query==null} onClick={()=>{
        
        router.push(`/SearchPage/${query}`)
      }} className='my-auto p-2 bg-rose-600 rounded-full focus:ring-4 focus:ring-opacity-60 focus:ring-rose-600 transition-all fade-in-out'>
        <AiOutlineSearch className='text-white w-7 h-7  rounded-full '/>
        </button>
      </div>
    </div>
  )
}
