import Link from "next/link";
import { useRouter } from "next/router";
import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import Input from "./Input";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';

export default function Signup() {
  const initialValues = {
    email: '',
    password: '',
    username: '',
    confirm_password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid Email Format!').required('Required!').min(5, 'Atleast 5 characters required!'),

    password: Yup.string().required('Required!').matches(/^(?=.{6,})/, "Must Contain 6 Characters!")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])/,
        "Must Contain One Uppercase, One Lowercase!"
      )
      .matches(
        /^(?=.*[!@#\$%\^&\*])/,
        "Must Contain One Special Case Character!"
      )
      .matches(/^(?=.{6,20}$)\D*\d/, "Must Contain One Number!"),

    username: Yup.string().required('Required!').min(5, 'Atleast 5 characters required!'),

    confirm_password: Yup.string().required('Required!')
      .test('passwords-match', 'Passwords must match!', function (value) {
        return this.parent.password === value
      })
  })

  const less = useCreateUser()
  const onSubmit = (values) => {

    less.mutate(values)

  }
  return (
    <div>
      <div className=" md:mx-0 z-[-1]">
        <div className="">
          <div className="p-8 bg-gradient-to-tr from-stone-900 to-stone-500 md:mx-10 my-10">
            
                <h2 className="text-gray-50 text-lg font-medium title-font mb-5">Sign Up And Join Us</h2>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                  {
                    formik => {

                      return (
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
                          <div className="relative mb-4">

                            <Input type="password" id="confirm_password" name="confirm_password" className="focus:border-black focus:ring-4 focus:ring-black focus:ring-opacity-50" label="Confirm Password" />
                          </div>
                          <button disabled={!formik.errors || formik.isValidating} className="text-black bg-gray-50 border-0 py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg" type="submit">{less.isLoading ? "Loading..." : "Signup"}</button>
                        </Form>
                      )
                    }
                  }
                  {/* Gangsta@11519*/}

                </Formik>
                <p className="text-xs text-gray-200 mt-3">Dont Have An Account <a className="border-b-2">Signup</a></p>
              </div>
            </div>
          </div>
      
    </div>
  )
}


const CreateUser = (user) => {
  
  return axios.post('https://gvn-backend-gvn-backend.herokuapp.com/api/v1/Signup/',user)
}

const useCreateUser = () => {
  const router = useRouter()
  return useMutation(CreateUser, {
      onSuccess: (response) => {

          router.push('/')
          toast.success('HEY!!! You Have Sigged In Succesfully')
      },
      onError: (error) => {
          const newerror = error.response.data
          
          if(error.message=="Network Error"){
              toast.error('Network Error Please Try After Some Time', { position: toast.POSITION.TOP_LEFT })
          }
          if (newerror.username || newerror.error) {
              toast.error(newerror.username?newerror.username[0]:newerror.error[0], { position: toast.POSITION.TOP_LEFT })
              
          }
          else{
              toast.error('Signup Unsuccesful Retry Again Later', { position: toast.POSITION.TOP_LEFT })
          }
          
          
      }
  })
}