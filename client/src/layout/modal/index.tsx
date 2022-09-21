import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    setRegisterModal: (registerModal: boolean) => void;
}

const Modal = ({ children, setRegisterModal }: Props ) => {
    return (
        <div className='fixed inset-0 z-50'>
            <div className='flex h-screen justify-center items-center' onClick={() => setRegisterModal(false)} >
                <div className='flex-col w-1/2 h-1/2 justify-center bg-white py-12 px-24 border-black rounded-lg' onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal