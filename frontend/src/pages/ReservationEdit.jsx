import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReservationEdit = () => {
  const { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`/api/reservations/${id}`)
      .then((res) => res.json())
      .then(setReservation)
      .catch(() => setReservation(null));
  }, [id]);

  if (!reservation) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl mb-4">Edit Reservation {id}</h2>
      <form className="space-y-4">
        <input className="border p-2 w-full" value={reservation.guest || ''} readOnly />
        {/* Add your form fields */}
      </form>
    </div>
  );
};

export default ReservationEdit;
