import React, { useEffect, useState } from 'react'
import { api } from '../../helpers/api'
import Post from '../../components/Post'
import ProfileCard from '../../components/ProfileCard'
import Header from '../../layout/header'
import Activity from '../../components/Activity'
import Messages from '../../components/Messages'
import Spinner from '../../assets/Spinner'
import { useParams } from 'react-router-dom'

const Profile = () => {

    const { user } = useParams();
    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState();

    useEffect(() => {
        api.post(`/post/getUserPosts`, {
            username: user
        })
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
    }, [])

    return (

        <div className=''>
            <Header />
            {/* ${currentPostModal && 'opacity-50'} */}
            <div className={`grid grid-cols-1 w-1/2 m-auto pt-4 px-4 justify-items-center border-solid border-2 `}>
                <div className='w-full grid gap-2'>
                    <ProfileCard />
                    {!posts}
                    <div className='h-auto bg-white rounded-lg p-5'>
                        {!loading ?
                            <Post data={posts!} setData={setPosts}/>
                            :
                            <Spinner />
                        }
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Profile