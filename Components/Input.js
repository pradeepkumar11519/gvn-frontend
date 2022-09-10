import React from 'react'
import { Field, ErrorMessage } from 'formik'

export default function Input(props1) {
    const { id, type, name, className,label, ...rest } = props1
    return (
        <div id="input" className='z-[-10]'>
            <div>
                <label htmlFor={props1.name} className={`leading-7 text-sm text-gray-100 ${props1.labelclassName}`}>{label}</label>
            </div>
            <div className=''>


                <Field as={props1.as} name={name}  {...rest}>
                    {
                        (props2) => {

                            const { field, form, meta } = props2
                            
                            return (

                                <div className=''>
                                    
                                       
                                        <input   {...field} placeholder={props1.placeholder} type={props1.type} id={props1.id} className={`w-full bg-white rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 z-[-1] leading-8 transition-colors duration-200 ease-in-out ${className}`} />
                                    
                                    <div className='my-2 text-red-500'>
                                    <ErrorMessage className='' name={name}>
                                        {msg => {
                                            return (
                                                    <div className="">
                                                        <p className='p-1 text-center text-red-500 bg-white '>{msg}</p>
                                                    </div>
                                            )
                                        }}

                                    </ErrorMessage>
                                    </div>
                                </div>

                            )



                        }
                    }
                </Field>




            </div>




        </div>

    )
}