import React, { ReactElement } from 'react'
import LandingPage from '../pages/landing'

type Props = {
    children: ReactElement
}

const ProtectedRoute = ({ children }: Props) => {

    const access = localStorage.getItem('token')

    if (!access) {
        return <LandingPage />
    }

    return children;
}

export default ProtectedRoute