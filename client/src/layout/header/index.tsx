import React from 'react'
import { BsPersonCircle } from 'react-icons/bs'

const Header = () => {
  return (
    <div className='h-16 bg-white flex justify-between items-center px-14'>
      <div>
        <h1>Social App</h1>
      </div>
      <div>
        <BsPersonCircle size={35} />
      </div>
    </div>
  )
}

export default Header