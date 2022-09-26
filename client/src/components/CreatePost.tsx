import React, { useState } from 'react'
import Modal from '../layout/modal'
import placeholder from '../assets/placeholder.jpg'
import { useSelector } from 'react-redux'
import { BsPersonCircle } from 'react-icons/bs'
import { IoMdSend } from 'react-icons/io'
import { AiFillCloseCircle } from 'react-icons/ai'
import { GrGallery } from 'react-icons/gr'
import { createPost } from '../helpers/api'

interface RootState {
  user: string
  userId: string
}


const CreatePost = () => {

  const user = useSelector((state: RootState) => state.user)
  const userId = useSelector((state: RootState) => state.userId)

  const [imagePreview, setImagePreview] = useState(placeholder)
  const [post, setPost] = useState({
    text: '',
    image: '',
    userId: userId
  })

  const handleImage = (e: any) => {
    const file = e.target.files[0]

    setImagePreview(URL.createObjectURL(file))
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPost({ ...post, image: reader.result as string })
      console.log(`Text: ${post.text} \n image: ${post.image}`);
    };
  }

  const handlePost = async () => {
    await createPost(post)
  }

  return (
    <>
      <div className='flex gap-4'>
        <div className='flex'>
          <BsPersonCircle size={35} />
        </div>
        <div className='w-full'>
          <textarea
            placeholder={`Hey ${user}, write a tweet!`}
            onChange={(e) => setPost({ ...post, text: e.target.value })}
            value={post.text}
            maxLength={100}
            className='resize-none overflow-hidden outline-none p-2 w-full h-14  items-center flex'>
          </textarea>
          <div className='relative w-fit h-fit'>
            <img src={imagePreview} className='object-cover w-full h-48' />
            <div className='absolute top-2 left-2' onClick={() => setPost({ ...post, image: '' })}>
              {imagePreview !== '' && <AiFillCloseCircle />}
            </div>
          </div>
        </div>
      </div>

      <div className='pt-4 flex justify-between px-1'>
        <div className='pl-14'>
          <input type='file' id='img-upload' className='hidden' onChange={handleImage} />
          <label htmlFor='img-upload'>
            <GrGallery size={30}/>
          </label>
        </div>
        <div>
          <IoMdSend onClick={handlePost} size={30}/>
        </div>
      </div>

    </>

  )
}

export default CreatePost