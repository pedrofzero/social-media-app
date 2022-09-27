import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

type Comment = {
    id: string,
    createdAt: string;
    author: any;
    text: string;
    username?: any;
}

type Props = {
    data: Comment[]
}

const Comment = ({ data }: Props) => {


    return (
        <div className='border-2 border-solid border-black rounded-lg p-2 w-full'>
            {data.map((item) => {
                console.log(item)
                return (
                    <>
                        <div className='flex gap-2' key={item.id}>
                            {/* insert user image */}
                            <p>Image</p>
                            <div className='flex flex-col'>
                                <p>{item.author.username}</p>
                                <p>{item.text}</p>
                                <AiOutlineHeart/>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Comment