import { dehydrate, QueryClient, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import Spinner from '../../Components/Spinner'
import Link from 'next/link'
export default function SearchPage() {
    
    const router = useRouter()
    console.log('r',router.query.Query);
    const QueriedVideos = useQuery(['QueryVideos'],()=>{
        return fetchQueryVideos(router.query.Query)
    })
    if(QueriedVideos.data.length===0){
        return (
            <h1 className='text-center text-xl'>We have Found 0 Result For Your Search Query <b>{router.query.Query} </b></h1>
        )
    }
    if(QueriedVideos.isLoading){
        return (
            <div className='mx-auto text-center'><Spinner/></div>
        )
    }
    if(QueriedVideos.isError){
        return (
            <div className='text-center text-xl'>Some Error Occured Please Try After Some Time</div>
        )
    }
    console.log('data',QueriedVideos);
  return (
    <div>
      <div>
      <h1 className='text-center mt-10 mb-20  text-3xl '>We Have Found {QueriedVideos.data.length} Videos For Your Query <b className=''>{router.query.Query}</b></h1>
      <section className="text-gray-600 body-font">
        <div className="container px-5  mx-auto">
          <div className="md:grid grid-cols-2 -mx-4 -mb-10 text-center">

            {QueriedVideos.data.map((video) => {
              return (
                <div key={video.id}>
                  <div className=" mb-10 px-4 ">
                    <div className="rounded-lg  overflow-hidden border-2 border-black">
                      <img alt="content" className="object-cover object-center h-full w-full" src={video.imageurl} />
                    </div>
                    <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{video.title}</h2>
                    
                    <Link href={`/VideoPage/${video.id}`}>
                    <a className="flex mx-auto mt-6 text-white bg-indigo-500 w-fit border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">Watch Now</a></Link>
                  </div>
                </div>
              )
            })}



          </div>
        </div>
      </section>
    </div>
    </div>
  )
}

const fetchQueryVideos = async (query) =>{
    return axios.get(`https://gvn-backend-gvn-backend.herokuapp.com/api/v1/GetAllVideos/?search=${query}`).then((response)=>{
        return response.data
    })
}


export const getServerSideProps = async ({params}) =>{
    console.log(params);
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['QueryVideos'],()=>{
        return fetchQueryVideos(params.Query)
    })
    return {
        props:{
            dehydratedState:dehydrate(queryClient)
        }
    }
}