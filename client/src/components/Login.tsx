import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { api } from '../helpers/api';

type Props = {
    setRegisterModal: (registerModal: boolean) => void;
}

const Login = ({ setRegisterModal } : Props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        // api.post('auth/login')
        // .then(response => {
        //     console.log(response)
        // })
    }

    return (
        <div className="w-2/4 mx-auto p-2 bg-white rounded-lg">
            <div className="w-full md:w-1/2 lg:w-2/3 mx-auto my-12">
                <form className="flex flex-col mt-4" onSubmit={() => handleSubmit()}>
                    <input
                        placeholder="Username"
                        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}

                    />
                    <p></p>

                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 mt-4 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <p></p>

                    <button
                        type="submit"
                        className="mt-4 px-4 py-3  leading-6 text-base rounded-md border border-transparent text-white focus:outline-none bg-blue-500 text-blue-100 hover:text-white focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer inline-flex items-center w-full justify-center items-center font-medium focus:outline-none"
                    >
                        Login
                    </button>

                    <div className="flex flex-col items-center mt-5">
                        <p className="mt-1 text-xs font-light text-gray-500">
                            Don't have an account?<a className="ml-1 font-medium text-blue-400" onClick={() => setRegisterModal(true)}>Register now</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login