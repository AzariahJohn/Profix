import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../AuthManager/AuthContext'

const ProtectedRoute = ({children}) => {

    const { currentUser } = useContext(AuthContext)
    if (!currentUser){
        return <Navigate to='/' />
    }

  return children;
}

export default ProtectedRoute