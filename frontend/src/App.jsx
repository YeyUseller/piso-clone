import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import OwnerDashboard from './pages/OwnerDashboard';
import ReservationsList from './pages/ReservationsList';
import ReservationEdit from './pages/ReservationEdit';
import PropertiesList from './pages/PropertiesList';
import PropertyEdit from './pages/PropertyEdit';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/admin/*"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="reservations" replace />} />
        <Route path="reservations" element={<ReservationsList />} />
        <Route path="reservations/:id" element={<ReservationEdit />} />
        <Route path="properties" element={<PropertiesList />} />
        <Route path="properties/:id" element={<PropertyEdit />} />
      </Route>
      <Route
        path="/owner/*"
        element={
          <ProtectedRoute>
            <OwnerDashboard />
          </ProtectedRoute>
        }
      >
        <Route index element={<Navigate to="reservations" replace />} />
        <Route path="reservations" element={<ReservationsList />} />
        <Route path="reservations/:id" element={<ReservationEdit />} />
        <Route path="properties" element={<PropertiesList />} />
        <Route path="properties/:id" element={<PropertyEdit />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default App;
