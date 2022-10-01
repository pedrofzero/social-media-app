import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { api, newComment } from '../helpers/api';

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
    postId: string
}

type RootState = {
    user: string;
    userId: string
    profilePicture: string
    fullName: string

}

const Comment = ({ data, postId }: Props) => {

    const navigate = useNavigate()
    const location = useLocation();

    const user = useSelector((state: RootState) => state.user)
    const userId = useSelector((state: RootState) => state.userId)
    const userPicture = useSelector((state: RootState) => state.profilePicture)
    const userFullName = useSelector((state: RootState) => state.fullName)

    const [commentText, setCommentText] = useState('')

    const [comments, setComments] = useState(data)

    useEffect(() => {

    })

    const handleNewComment = async () => {
        const comment = await newComment(userId, commentText, postId).then(response => {
            console.log(response)
        })
    }

    return (
        <div className='p-1 w-full'>
            {/* If path is /, then only show 1 comment, so it doesn't flood every post. If it's not /, then we're inside the post link, and we can show every comment. */}
            {location.pathname === '/' ? comments.slice(0, 1).map(item => {
                return (
                    <>
                        <div className='flex gap-4 items-center' key={item.id}>
                            <img src={item.author.profilePicture} className="h-7 w-7 bg-black rounded-full" />
                            <div className='flex flex-col'>
                                <p>{item.author.fullName} <span className='text-gray-200' onClick={() => navigate(`/${item.author.username}`)}>@{item.author.username}</span></p>
                                <p>{item.text}</p>
                                <AiOutlineHeart />
                            </div>
                        </div>
                    </>
                )
            })
                :
                <>
                    <div className='flex gap-4 items-center py-2  border-b-2 border-solid border-black'>
                        <img src={userPicture} className="h-7 w-7 bg-black rounded-full" />
                        <div className='flex flex-col w-full'>
                            <p>{userFullName} <span className='text-gray-200' onClick={() => navigate(`/${userFullName}`)}>@{user}</span></p>
                            <div className='flex'>
                                <textarea
                                    value={commentText}
                                    onChange={e => setCommentText(e.target.value)}
                                    placeholder={`Hey ${user}, write a tweet!`}
                                    maxLength={100}
                                    className='resize-none overflow-hidden outline-none p-2 w-3/4 h-14 items-center flex'>
                                </textarea>
                                <button className='rounded-full bg-green-500 w-20 h-12 ml-auto mt-auto' onClick={() => handleNewComment()}>Hello</button>
                            </div>
                        </div>
                    </div>
                    {comments.map(item => {
                        return (
                            <>

                                <div className='flex gap-4 items-center py-2' key={item.id}>
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
                </>}
        </div>
    )
}

export default Comment