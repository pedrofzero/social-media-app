import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'

const Messages = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <h2>Messages</h2>
                <FiMessageCircle size={20} />
            </div>
            <div className='pt-10 flex flex-col gap-4'>
                <div className='flex gap-4 items-center'>
                    <BsPersonCircle size={30} />
                    <div className='flex flex-col'>
                        <p>Username</p>
                        <p className='text-gray-500'>Active 30 mins ago</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <BsPersonCircle size={30} />
                    <div className='flex flex-col'>
                        <p>Username</p>
                        <p className='text-gray-500'>Active 30 mins ago</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <BsPersonCircle size={30} />
                    <div className='flex flex-col'>
                        <p>Username</p>
                        <p className='text-gray-500'>Active 30 mins ago</p>
                    </div>
                </div>
                <div className='flex gap-4 items-center'>
                    <BsPersonCircle size={30} />
                    <div className='flex flex-col'>
                        <p>Username</p>
                        <p className='text-gray-500'>Active 30 mins ago</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages