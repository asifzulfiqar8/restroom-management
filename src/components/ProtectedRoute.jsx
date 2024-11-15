/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children}) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  console.log('isAuthenticated', isAuthenticated)
  return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default ProtectedRoute;