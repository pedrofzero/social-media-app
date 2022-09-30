import React, { SetStateAction, useState } from 'react'
import { BsPersonCircle } from 'react-icons/bs'
import { HiMenuAlt4 } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useWindowSize } from '../../hooks/useWindowSize'
import { logout } from '../../redux/authReducer'

const Header = () => {

  const size = useWindowSize();

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state: any) => state.user)

  const [openUserModal, setOpenUserModal] = useState(false)

  const handleModal = () => {
    if (openUserModal) {
      setOpenUserModal(false)
    } else {
      setOpenUserModal(true)
    }
  }

  return (
    <div className='h-16 bg-white flex justify-between items-center px-8 border-2 border-solid border-b-black'>
      <div>
        <h1 >{size <= 768 ? <HiMenuAlt4 /> : <p onClick={() => navigate('/')}>Social App</p>} </h1>
      </div>
      <div className="relative" >
        <BsPersonCircle size={35} onClick={handleModal} />
        {openUserModal &&
          <>
            <div className='bg-gray-300 absolute z-10 w-48 h-36 -left-28 top-10 rounded-lg flex flex-col items-center justify-center'>
              <h1 className='text-lg' onClick={() => navigate(`/${user}`)}>My profile</h1>
              <h1 onClick={() => dispatch(logout())} className='text-lg'>Logout</h1>
            </div>
          </>
        }
      </div>
    </div>
  )
}

export default Header