import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const AdminDashboard = () => {
  const { logout } = useAuth();
  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <div className="space-x-4">
          <Link to="/admin/reservations" className="text-blue-500">Reservations</Link>
          <Link to="/admin/properties" className="text-blue-500">Properties</Link>
        </div>
        <button onClick={logout} className="text-red-500">Logout</button>
      </div>
      <Outlet />
    </div>
  );
};

export default AdminDashboard;
