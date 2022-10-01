import React, { useState } from 'react'
import Comment from './Comment'
import { BsPersonCircle } from 'react-icons/bs'
import { AiOutlineLike } from 'react-icons/ai'
import { BsBookmark } from 'react-icons/bs'
import { BsThreeDots } from 'react-icons/bs'
import { BiTrash } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteComment, deletePost } from '../helpers/api'

type Post = {
    id: string;
    author: any;
    // username: any;
    text: string;
    media: string;
    comments: any
}

type Props = {
    data: Post[]
}

type UserState = {
    user: string;
    userId: string
    profilePicture: string
    fullName: string

}



const Post = ({ data }: Props) => {

    const user = useSelector((state: UserState) => state.user)

    const navigate = useNavigate()
    const [openMore, setOpenMore] = useState<number>()

    const handleOpenMore = (e: any, index: number) => {
        e.stopPropagation()
        setOpenMore(index)
    }

    const handleDeletePost = async (postId: string) => {
        await deletePost(postId)
    }

    return (
        <>
            <div className='flex flex-col gap-2'>
                {data.map((item, index) => {
                    return (
                        <>
                            <div className='h-auto bg-white rounded-lg p-5 border-2 border-sold border-black hover:bg-slate-50' key={item.id} onClick={() => navigate(`/${item.author.username}/${item.id}`)}>
                                <div className='flex items-center justify-between'>
                                    <div className='flex gap-4 items-center'>
                                        <BsPersonCircle size={30} />
                                        <h1>{item.author?.username}</h1>
                                    </div>

                                    {item.author.username === user &&
                                        <div className='relative w-10 h-10 rounded-full ' onClick={(e) => handleOpenMore(e, index)}>
                                            <div style={{ position: 'absolute', top: '12px', left: '12px' }} className="hover:bg-gray-300">
                                                <BsThreeDots />
                                            </div>
                                            {openMore === index &&
                                                <div className='absolute bg-white rounded-lg border-black border-2 border-solid h-10 w-24 top-4 -left-16'>
                                                    <div className='flex w-full h-full text-md rounded-lg items-center justify-center hover:bg-slate-200' onClick={() => handleDeletePost(item.id)}>
                                                        <BiTrash />
                                                        <p>Delete</p>
                                                    </div>
                                                </div>
                                            }
                                        </div>
                                    }
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