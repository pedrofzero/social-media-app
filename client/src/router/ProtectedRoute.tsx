import React, { ReactElement } from 'react'
import { useSelector } from 'react-redux'
import LandingPage from '../pages/landing'

type Props = {
    children: ReactElement
}

interface RootState {
    user: object
}

const ProtectedRoute = ({ children }: Props) => {

    const user = useSelector((state: RootState) => state.user)
    console.log(`user: ${user}`)

    if (!user) {
        return <LandingPage />
    }

    return children;
}

export default ProtectedRoute