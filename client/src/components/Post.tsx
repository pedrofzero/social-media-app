import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { FiMessageCircle } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'

const Post = () => {
    return (
        <div className=''>
            <div className='flex gap-4 items-center'>
                <BsPersonCircle size={30} />
                <h1>Username</h1>
            </div>
            <div className='pt-4'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, distinctio temporibus voluptatem saepe cumque quis nisi exercitationem omnis tempore at unde velit ex praesentium, natus perspiciatis illo, delectus aut. Doloremque?
            </div>
            <div className='pt-4'>
                <img src='https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y' />
            </div>
            <div className='flex justify-between pt-4'>
                <div className='flex gap-2'>
                    <AiOutlineLike size={25}/>
                    <FiMessageCircle size={25}/>
                </div>
                <div>
                    <BsBookmark size={25}/>
                </div>
            </div>
        </div>
    )
}

export default Post