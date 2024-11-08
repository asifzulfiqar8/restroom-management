const ProtectedRoute = ({ element, isLoggedIn }) => {
  return isLoggedIn ? element : null; // Or navigate to a fallback
};

export default ProtectedRoute