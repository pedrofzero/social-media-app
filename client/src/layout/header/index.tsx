import React, { useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/authReducer'

const Header = () => {

  const dispatch = useDispatch()
  const [openUserModal, setOpenUserModal] = useState(false)

  const handleModal = () => {
    if (openUserModal) {
      setOpenUserModal(false)
    } else {
      setOpenUserModal(true)
    }
  }

  return (
    <div className='h-16 bg-white flex justify-between items-center px-14'>
      <div>
        <h1>Social App</h1>
      </div>
      <div className="relative" >
        <BsPersonCircle size={35} onClick={handleModal}/>
        {openUserModal &&
          <>
            <div className='bg-gray-300 absolute z-10 w-48 h-36 -left-28 top-10 rounded-lg flex flex-col items-center justify-center'>
              <h1 className='text-lg'>My profile</h1>
              <h1 onClick={() => dispatch(logout())} className='text-lg'>Logout</h1>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header