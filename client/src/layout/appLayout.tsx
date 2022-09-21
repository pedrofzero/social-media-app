import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const AppLayout = ({children} : Props) => {
    return (
        <div className='h-screen w-screen'>
            {children}
        </div>
    )
}

export default AppLayout