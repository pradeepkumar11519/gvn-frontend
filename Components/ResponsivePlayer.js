import React from 'react'
import ReactPlayer from 'react-player'
export default function ResponsivePlayer(props) {
  return (
    <div className='border-4 border-black'>
       <div className='player-wrapper sm:w-[600px] sm:h-[350px] md:w-[700px] md:h-[400px]'>
        <ReactPlayer 
        controls 
        className='react-player'
        url={props.url}
        width="100%"
        height="100%"
        onReady={()=>{console.log(
            console.log('OnReady CallBack')
        )}}
        onStart={()=>{console.log(
            'OnStart CallBack'
        )}}
        onPause={()=>{console.log(
            'OnPause CallBack'
        )}}
        onEnded={()=>{console.log(
            'OnEnded CallBack'
        )}}
        onError={()=>{console.log(
            'OnError CallBack'
        )}}
        onProgress={()=>{
            return (
                <h1>loading...</h1>
            )
        }}
        />
      </div>
    </div>
  )
}
