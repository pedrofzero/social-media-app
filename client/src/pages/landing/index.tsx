import React, { useState } from 'react'
import Login from '../../components/Login';
import Modal from '../../layout/modal';
import LandingImage from '../../assets/LandingImage.svg'
import Register from '../../components/Register';

const LandingPage = () => {

  const [registerModal, setRegisterModal] = useState(false);

  return (
    <>
      {registerModal &&
        <>
          <Modal setRegisterModal={setRegisterModal}>
            <Register setRegisterModal={setRegisterModal} />
          </Modal>
        </>
      }

      <div className={`h-screen grid grid-cols-2 ${registerModal && 'opacity-50'}`}>

        {/* left side */}
        <div className='h-full align-middle bg-white'>
          <div className='text-6xl text-black text-center pt-40'>
            Social Media
          </div>
          <div className='text-2xl text-black text-center'>
            Connect with your friends now
          </div>
          <div className='w-2/5 m-auto pt-20'>
            <img src={LandingImage} className='w-96 h-96' />
          </div>
        </div>

        {/* right side */}
        <div className='h-full items-center bg-blue-300 flex'>
          <Login setRegisterModal={setRegisterModal} />
        </div>

      </div>
    </>
  )
}

export default LandingPage