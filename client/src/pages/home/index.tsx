import React, { useEffect } from 'react'
import Activity from '../../components/Activity'
import Messages from '../../components/Messages'
import Post from '../../components/Post'
import { useWindowSize } from '../../hooks/useWindowSize'
import Header from '../../layout/header'

const Home = () => {
    const size = useWindowSize();

    useEffect(() => {
        console.log(size)
    }, [size])

    return (
        <div>
            <Header />
            <div className='grid grid-cols-3 pt-4 justify-items-center  border-solid border-2 border-blue-500'>
                <div className='hidden md:block h-96 md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                    <Activity />
                </div>
                <div className='h-auto w-full bg-white rounded-lg p-5'>
                    <Post />
                </div>
                <div className='hidden md:block h-96 md:w-3/4 lg:w-4/5 bg-white rounded-lg justify-end p-4'>
                    <Messages />
                </div>
            </div>
        </div>
    )
}

export default Home