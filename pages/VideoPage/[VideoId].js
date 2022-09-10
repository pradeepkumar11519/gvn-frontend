import { QueryClient,dehydrate, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useContext, useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import Comments from '../../Components/Comments'
import ResponsivePlayer from '../../Components/ResponsivePlayer'
import Spinner from '../../Components/Spinner'
import Context from '../../Context/Context'

export default function VideoId(props) {
    const router = useRouter()
    const EachVideo = useQuery(['EachVideo'],()=>{
        return fetchEachVideo(router.query.VideoId)
    })
    if(EachVideo.isLoading){
        return(
            <div className='text-center'><Spinner/></div>
        )
    }
    if(EachVideo.isError){
        return(
            <div className='text-center'>{EachVideo.error.message}</div>
        )
    }
    return (
        <div>
            
            <section className="text-gray-600 body-font">
                <div className="container my-10 mx-auto flex   items-center justify-center flex-col">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 text-center">{EachVideo.data.title}</h1>
                    <div className=' my-10 '>
                    <ResponsivePlayer url={EachVideo.data.url} />
                    </div>
                    <div className="text-center lg:w-2/3 w-full">
                        
                        <p className="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button</button>
                        </div>
                    </div>
                </div>
            </section>
            <div>
                <Comments cookies={props.cookies}/>
            </div>
            
        </div>
    )
}

const fetchEachVideo = async (id) =>{
    return axios.get(`https://gvn-backend-gvn-backend.herokuapp.com/api/v1/GetEachVideo/${id}/`).then((response)=>{
        return response.data
    })
}


export async function getServerSideProps({req,res,params}){
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['EachVideo'],()=>{
        return fetchEachVideo(params.VideoId)
    })
    await queryClient.prefetchQuery(['AllComments'],()=>{
        return fetchAllComments(params.VideoId)
    })
    return {
        props:{
            dehydratedState:dehydrate(queryClient),
            cookies:req.cookies,
            VideoId:params.VideoId
        }
    }
}


export const fetchAllComments = async (id) =>{
    return axios.get(`https://gvn-backend-gvn-backend.herokuapp.com/api/v1/LCComment/${id}/`).then((response)=>{
        return response.data
    })
}


