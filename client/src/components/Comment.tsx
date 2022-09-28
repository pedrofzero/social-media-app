import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

type Comment = {
    id: string,
    createdAt: string;
    author: any;
    profilePicture: any;
    fullName: any;
    text: string;
    username?: any;
}

type Props = {
    data: Comment[]
}

const Comment = ({ data }: Props) => {

    const navigate = useNavigate()

    return (
        <div className='p-2 w-full'>
            {data.map((item) => {
                console.log(item)
                return (
                    <>
                        <div className='flex gap-2 items-center' key={item.id}>
                            <img src={item.author.profilePicture} className="h-7 w-7 bg-black rounded-full" />
                            <div className='flex flex-col'>
                                <p>{item.author.fullName} <span className='text-gray-200' onClick={() => navigate(`/${item.author.username}`)}>@{item.author.username}</span></p>
                                <p>{item.text}</p>
                                <AiOutlineHeart />
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Comment