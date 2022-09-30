import React, { useEffect, useState } from 'react'
import Activity from '../../components/Activity'
import CreatePost from '../../components/CreatePost'
import Messages from '../../components/Messages'
import Post from '../../components/Post'
import { api } from '../../helpers/api'
import { useWindowSize } from '../../hooks/useWindowSize'
import Header from '../../layout/header'
import Modal from '../../layout/modal'

const Home = () => {

    const [data, setData] = useState()
    const [currentPostModal, setCurrentPostModal] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('/post/getAllPosts')
            .then(response => {
                setData(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className=''>
                <Header />
                {/* ${currentPostModal && 'opacity-50'} */}
                <div className={`grid sm:grid-cols-1 md:grid-cols-1 pt-4 px-4 justify-items-center border-solid border-2 `}>
                    {/* <div className='hidden md:block  h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                        <Activity />
                    </div> */}
                    <div className='w-full grid gap-2'>
                        <div className='h-auto bg-white rounded-lg p-5'>
                            <CreatePost />
                        </div>
                        {!loading &&
                            <Post data={data!} />
                        }
                    </div>
                    {/* <div className='hidden md:block h-fit md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                        <Messages />
                    </div> */}
                </div>
            </div>
        </>

    )
}

export default Home