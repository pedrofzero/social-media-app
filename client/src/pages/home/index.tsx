import React, { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost'
import Post from '../../components/Post'
import { api } from '../../helpers/api'
import Header from '../../layout/header'

const Home = () => {

    const [loading, setLoading] = useState(true)
    const [posts, setPosts] = useState()

    useEffect(() => {
        api.get('/post/getAllPosts')
            .then(response => {
                setPosts(response.data)
                setLoading(false)
            })
    }, [])

    return (
        <>
            <div className=''>
                <Header />
                <div className={`grid grid-cols-1 w-1/2 m-auto pt-4 px-4 justify-items-center border-solid border-2`}>
                    <div className='w-full grid gap-2'>
                        <div className='h-auto bg-white rounded-lg p-5'>
                            <CreatePost setData={setPosts} />
                        </div>
                        {!loading &&
                            <Post data={posts!} setData={setPosts} />
                        }
                    </div>
                </div>
            </div>
        </>

    )
}

export default Home