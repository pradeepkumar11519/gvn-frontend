import React from 'react'
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from "./Input";
import {useMutation } from '@tanstack/react-query'
import axios from "axios";
import { useContext } from 'react';
import { toast } from 'react-toastify';
import context from '../Context/Context';
export default function Login() {
    
    const initialValues = {
        email: "",
        password: "",
        username: ""
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid Email Format').required('Required'),

        password: Yup.string().required('Required'),

        username: Yup.string().required('Required'),


    });
    const less = useLoginUser()
    const onSubmit = (values) => {
        less.mutate(values)
    }
    return (
        <div>
            <div>
                <div className=" md:mx-0">
                    <div className="">
                                <div className="bg-gradient-to-tr from-gray-900 to-gray-500  p-8    my-20 ">
                                    <h2 className="text-gray-50 text-lg font-medium title-font mb-5">Login for More Facilities</h2>
                                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                        {
                                            formik => {
                                                return (
                                                    <>
                                                        <Form>
                                                            <div className="relative mb-4">
                                                                <Input type="text" id="username" name="username" label="UserName" className="focus:border-black focus:ring-4 focus:ring-black focus:ring-opacity-50" />
                                                            </div>
                                                            <div className="relative mb-4">
                                                                <Input type="email" id="email" name="email" label="Email" className="focus:border-black focus:ring-4 focus:ring-black focus:ring-opacity-50" />
                                                            </div>
                                                            <div className="relative mb-4">

                                                                <Input type="password" id="password" name="password" label="Password" className="focus:border-black focus:ring-4 focus:ring-black focus:ring-opacity-50" />
                                                            </div>
                                                            <button disabled={!formik.errors || formik.isValidating} className="text-black bg-gray-50 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg" type="submit">{less.isLoading ? "Loading..." : "Login"}</button>
                                                        </Form>
                                                    </>
                                                )
                                            }
                                        }
                                    </Formik>
                                    <p className="text-xs text-gray-200 mt-3">Already Have An Account <a className="border-b-2">Login</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}


const LoginUser = (user) => {
    return axios.post('api/auth/Login/',user,{
        withCredentials:true,
    })
}

const useLoginUser = () => {
    const {setuser} = useContext(context)
    const router = useRouter()
    
    return useMutation(LoginUser, {
        onSuccess: (response) => {
            
            setuser(response.data)
            router.push('/')
            toast.success('You Have Logged In Successfully!!!',{position:toast.POSITION.TOP_LEFT})
            
        },
        onError: (error) => {
            const newerror = error.response.data
            toast.error('Invalid Credentials Please Recheck',{position:toast.POSITION.TOP_LEFT})
        }
    })
}
