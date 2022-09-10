import Cookies from 'js-cookie'
import React, { useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import {toast} from 'react-toastify'
const context = createContext()

export default context

export const ContextProvider = ({children})=>{
     const [user,setuser] = useState(Cookies.get('user_details')?JSON.parse(Cookies.get('user_details')):null)
     const [IsOpen1, setIsOpen1] = useState(false);
     const [modalIsOpen, setIsOpen] = React.useState(false);
     const router = useRouter()
     const Logout = () =>{
        setuser(null)
		Cookies.remove('user_details')
		Cookies.remove('access')
		Cookies.remove('refreh')
		localStorage.clear()
		
        axios.get('/api/auth/Logout').then((response)=>{
            router.push('/JoinUsPage')
            toast('Logged Out Succesfully',{position:toast.POSITION.TOP_LEFT})
        })
     }
    const contextData = {
        user:user,
        setuser:setuser,
        Logout:Logout,
        modalIsOpen:modalIsOpen,
        setIsOpen:setIsOpen,
        IsOpen1:IsOpen1,
        setIsOpen1:setIsOpen1,
    
    }
    console.log('user',user);
    return (
        <context.Provider value = {contextData}>
            {children}
        </context.Provider>
    )
}