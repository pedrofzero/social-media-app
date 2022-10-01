import React, { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import Post from '../../components/Post'
import ProfileCard from '../../components/ProfileCard'
import Header from '../../layout/header'
import Activity from '../../components/Activity'
import Messages from '../../components/Messages'

const Profile = () => {

    const [loading, setLoading] = useState(true)
    const [data, setData] = useState();

    useEffect(() => {
        api.post(`/post/getUserPosts`)
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
    }, [])

    return (

        <div className=''>
            <Header />
            {/* ${currentPostModal && 'opacity-50'} */}
            <div className={`grid sm:grid-cols-3 md:grid-cols-3 pt-4 px-4 justify-items-center border-solid border-2 `}>
                <div className='hidden md:block  h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                    <Activity />
                </div>
                <div className='w-full grid gap-2'>
                    <ProfileCard />

                    <div className='h-auto bg-white rounded-lg p-5'>
                        {!loading &&
                            <>
                                <Post data={data!} />
                            </>
                        }
                    </div>
                    {!loading &&
                        <Post data={data!} />
                    }
                </div>
                <div className='hidden md:block h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                    <Messages />
                </div>
            </div>
        </div>


    )
}

export default Profile