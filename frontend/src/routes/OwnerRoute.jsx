import { Navigate, Outlet } from 'react-router-dom';

export default function OwnerRoute() {
  const role = localStorage.getItem('role');
  return role === 'owner' ? <Outlet /> : <Navigate to="/login" replace />;
}
