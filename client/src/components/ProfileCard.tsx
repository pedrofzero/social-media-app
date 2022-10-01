import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { api, getUser } from '../helpers/api';
import Activity from './Activity';
import CreatePost from './CreatePost';
import Messages from './Messages';
import { BsPersonCircle } from 'react-icons/bs';

type Profile = {
    username: string;
    profilePicture: string;
    posts: [];
    fullName: string
}


const ProfileCard = () => {

    const { user } = useParams();
    const [data, setData] = useState<Profile>()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.post(`/users/${user}`)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            {!loading &&
                // <d
                    <div className='w-full grid gap-0'>
                        <div className='bg-white h-40 rounded-lg p-6 flex flex-col justify-between'>
                            <img src={data?.profilePicture} className="w-14 h-14 bg-black rounded-full"/>
                            <div className='flex flex-col'>
                                <h1 className='text-2xl'>{data?.username}</h1>
                                <div className='flex justify-between items-end'>
                                    <p className='text-gray-500'>@{data?.username}</p>
                                    <button className='bg-gray-200 rounded-lg p-1'>
                                        Edit Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
            }
        </>
    )
}

export default ProfileCard