import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'


const Activity = () => {
    return (
        <div className=''>
            <div className='flex justify-between'>
                <h2>Activity</h2>
                <h2 className='text-gray-500'>See all</h2>
            </div>
            <div className='pt-10 flex flex-col gap-4'>
                <div className='flex gap-2 items-center'>
                    <BsPersonCircle size={30}/>
                    <p>User started following you.</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsPersonCircle size={30}/>
                    <p>User has liked your post.</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <BsPersonCircle size={30}/>
                    <p>User started following you.</p>
                </div>
            </div>
        </div>
    )
}

export default Activity