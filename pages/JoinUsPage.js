import React from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

export default function JoinUsPage() {
  return (
    <div>
      <div className='my-10'>
      
      <div className='lg:grid grid-cols-2'>
        <div>
        <Signup/>
          
        </div>
        <div>
        <Login/>
        </div>
      </div>
    </div>
    </div>
  )
}
