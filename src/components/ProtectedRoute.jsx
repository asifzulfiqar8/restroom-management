/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({user, children, redirect = '/login'}) => {
  if(!user) return <Navigate to={redirect} replace />
  return children;
}

export default ProtectedRoute;