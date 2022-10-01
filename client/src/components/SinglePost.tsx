import React from 'react'
import { AiOutlineLike } from 'react-icons/ai';
import { BsPersonCircle, BsThreeDots, BsBookmark } from 'react-icons/bs';
import { FiMessageCircle } from 'react-icons/fi';
import Comment from './Comment'

type Post = {
    id: string;
    text: string;
    media: string;
    author: any;
    username: string;
    comments: any;
}

type Props = {
    post: Post;
}

const SinglePost = ({ post }: Props) => {

    return (
        <div className='h-auto bg-white rounded-lg p-5 border-2 border-sold border-black' key={post.id}>
            <div className='flex posts-center justify-between'>
                <div className='flex gap-4 posts-center'>
                    <BsPersonCircle size={30} />
                    <h1>{post.author?.username}</h1>
                </div>
                <div className='relative'>
                    <BsThreeDots />
                    <div>
                        {/* add menu to edit/delete here */}
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                {post.text}
            </div>
            <div className='mt-4'>
                <img src={`${post.media}`} className="h-96" />
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
            {post.comments.length > 0 &&
                <div className='mt-4'>
                    <Comment postId={post.id} data={post.comments} />
                </div>
            }
        </div>
    )
}

export default SinglePost