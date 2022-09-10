import { dehydrate, QueryClient } from '@tanstack/react-query'
import React from 'react'
import VideoImage from '../../Components/VideoImage'
import axios  from 'axios';
export default function VideoPage(props) {
  return (
    <div>
      <VideoImage/>
    </div>
  )
}


export const fetchVideos = async () => {
    return axios.get('https://gvn-backend-gvn-backend.herokuapp.com/api/v1/GetAllVideos/').then((response) => {

      return response.data
      
    })
  }

export const getServerSideProps = async ({req,res}) =>{
    
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['AllVideos'],fetchVideos)
    return {
        props:{
            dehydratedState:dehydrate(queryClient)
        }
    }
}