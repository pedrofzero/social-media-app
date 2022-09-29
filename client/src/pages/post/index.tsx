import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Activity from '../../components/Activity'
import CreatePost from '../../components/CreatePost'
import Messages from '../../components/Messages'
import SinglePost from '../../components/SinglePost'
import { api, getPost } from '../../helpers/api'
import Header from '../../layout/header'



const Post = () => {

    const { user, post } = useParams()
    const [loading, setLoading] = useState(true)
    const [singlePost, setSinglePost] = useState<any>()

    useEffect(() => {
        const getPostCall = async () => {
            const data = await getPost(user, post)
            setSinglePost(data);
            setLoading(false)
        }
        getPostCall();
    }, [])

    return (
        <>
            <div>
                <Header />
                {/* ${currentPostModal && 'opacity-50'} */}
                <div className={`grid sm:grid-cols-2 md:grid-cols-3 pt-4 justify-items-center border-solid border-2 `}>
                    <div className='hidden sm:block h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                        <Activity />
                    </div>
                    <div className='w-full grid gap-2 p-2 '>
                        {!loading &&
                            <div className='flex flex-col gap-4'>
                                <SinglePost post={singlePost}/>
                            </div>
                        }
                    </div>
                    <div className='hidden md:block h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                        <Messages />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Post