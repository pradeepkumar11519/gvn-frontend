import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import { QueryClient, useQuery,dehydrate } from '@tanstack/react-query'
import { fetchVideos } from '../pages/VideoPage'
import axios from 'axios'
import Link from 'next/link'
import { fetchEachVideo } from '../pages/VideoPage/[VideoId]'
import Context from '../Context/Context'
import Spinner from './Spinner'


export default function VideoImage(props) {
    const {setEachVideo} = useContext(Context)
  const AllVideos = useQuery(['AllVideos'],fetchVideos)
  if(AllVideos.isLoading){
    return(
        <>
        <h1 className='text-center'><Spinner/></h1>
        </>
    )
  }
  if(AllVideos.isError){
    return(
      <>
      <h1 className='text-center'>Server Error</h1>
      </>
    )
  }
  return (
    <div>
      <h1 className='text-center mt-10 mb-20 font-bold text-3xl lg:text-5xl'>Our YouTube Videos</h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="md:grid grid-cols-2 -mx-4 -mb-10 text-center">

            {AllVideos?.data.map((video) => {
              return (
                <div key={video.id}>
                  <div className=" mb-10 px-4 ">
                    <div className="rounded-lg  overflow-hidden border-2 border-black">
                      <img alt="content" className="object-cover object-center h-full w-full" src={video.imageurl} />
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{video.title}</h2>
                    <p className="leading-relaxed text-base">Williamsburg occupy sustainable snackwave gochujang. Pinterest cornhole brunch, slow-carb neutra irony.</p>
                    <Link href={`VideoPage/${video.id}`}>
                    <a className="flex mx-auto mt-6 text-white bg-indigo-500 w-fit border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Watch Now</a></Link>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </section>
    </div>
  )
}




