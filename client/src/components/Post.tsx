import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { FiMessageCircle } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
import Comment from './Comment'
import Modal from '../layout/modal'
import { useNavigate } from 'react-router-dom'

type Post = {
    id: string;
    author: any;
    text: string;
    media: string;
    comments: any
}

type Props = {
    data: Post[]
}


const Post = ({ data}: Props) => {

    const navigate = useNavigate()

    return (
        <>
            <div className='flex flex-col gap-2'>
                {data.map((item) => {
                    return (
                        <>
                            {/* {console.log(item)} */}
                            {/* test this div below instead of passing it in home. */}
                            <div className='h-auto bg-white rounded-lg p-5 border-2 border-sold border-black hover:bg-slate-50' key={item.id} onClick={() => navigate(`/${item.author.username}/${item.id}`)}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <BsPersonCircle size={30} />
                                        <h1>{item.author?.username}</h1>
                                    </div>
                                    <div className='relative'>
                                        <BsThreeDots />
                                        <div>
                                            {/* add menu to edit/delete here */}
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-4'>
                                    {item.text}
                                </div>
                                <div className='mt-4'>
                                    <img src={`${item.media}`} className="h-96" />
                                </div>
                                <div className='flex justify-between pt-4'>
                                    <div className='flex gap-2'>
                                        <AiOutlineLike size={25} />
                                        <FiMessageCircle size={25} />
                                    </div>
                                    <div>
                                        <BsBookmark size={25} />
                                    </div>
                                </div>
                                {item.comments.length > 0 &&
                                    <div className='mt-4'>
                                        <Comment postId={item.id} data={item.comments} />
                                    </div>
                                }
                            </div>

                        </>
                    )
                })}
            </div>
        </>
    )
}

export default Post