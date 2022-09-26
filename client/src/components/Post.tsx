import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { FiMessageCircle } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'

type Post = {
    id: string;
    text: string;
    media: string;
    authorId: string;
}

type Props = {
    data: Post[]
}


const Post = ({ data }: Props) => {

    return (
        <div className='flex flex-col gap-2'>
            {data.map((item, index) => {
                return (
                    <>
                        {/* test this div below instead of passing it in home. */}
                        <div className='h-auto bg-white rounded-lg p-5 border-2 border-sold border-black '>
                            <div className='flex gap-4 items-center' key={index}>
                                <BsPersonCircle size={30} />
                                <h1>{item.authorId}</h1>
                            </div>
                            <div className='pt-4'>
                                {item.text}
                            </div>
                            <div className='pt-4 border-2 border-solid border-black'>
                                <img src={`${item.media}`} className="border-solid border-2 border-black object-none " />
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
                        </div>

                    </>
                )
            })}
        </div>
    )
}

export default Post