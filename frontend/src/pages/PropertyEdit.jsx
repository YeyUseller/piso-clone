import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PropertyEdit = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch(`/api/properties/${id}`)
      .then((res) => res.json())
      .then(setProperty)
      .catch(() => setProperty(null));
  }, [id]);

  if (!property) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-xl mb-4">Edit Property {id}</h2>
      <form className="space-y-4">
        <input className="border p-2 w-full" value={property.name || ''} readOnly />
        {/* Add your form fields */}
      </form>
    </div>
  );
};

export default PropertyEdit;
