import React, { ReactNode } from 'react'

interface Props {
    children?: ReactNode
    setModal: (arg0: boolean) => void;
}

const Modal = ({ children, setModal }: Props) => {
    return (
        <div className='fixed inset-0 z-50' style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
            <div className='flex h-screen justify-center items-center' onClick={() => setModal(false)} >
                <div className='flex-col w-2/4 h-2/5 justify-center bg-white py-12 px-24 border-2 border-solid border-black rounded-lg' onClick={e => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal