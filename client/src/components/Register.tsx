import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../helpers/api';

type Props = {
  setRegisterModal: (registerModal: boolean) => void;
}

const Register = ({ setRegisterModal }: Props) => {

  const { register, handleSubmit } = useForm();
  const onSubmit = (fields: any) => {
    api.post('/auth/register', {
      email: fields.email,
      username: fields.username,
      password: fields.password
    })
    .then(response => {
      console.log(response)
    })
  }

  return (
    <div>
      <div className='text-center text-2xl'>Register</div>
      <div className="w-full md:w-1/2 lg:w-2/3 mx-auto my-12">
        <form className="flex flex-col mt-4" onSubmit={handleSubmit(onSubmit)}>

          <input
            placeholder="E-mail address"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            {...register("email")}
          />

          <input
            placeholder="Username"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            {...register("username")}
          />

          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
            {...register("password")}
          />

          <button
            type="submit"
            className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
          >
            Register
          </button>

          <div className="flex flex-col items-center mt-5">
            <p className="mt-1 text-xs font-light text-gray-500">
              Already have an account?<a className="ml-1 font-medium text-blue-400" onClick={() => setRegisterModal(false)}>Login now</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register