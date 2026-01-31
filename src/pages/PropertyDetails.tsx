import { useParams } from 'react-router-dom';
import { properties } from '../data/properties';

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id));

  if (!property) return <p>Property not found</p>;

  return (
    <div className='p-6'>
      <img
        src={property.image}
        alt={property.title}
        className='w-full max-h-96 object-cover rounded-lg mb-4'
      />
      <h1 className='text-2xl font-bold mb-2'>{property.title}</h1>
      <p className='text-gray-600 mb-2'>{property.city}</p>
      <strong className='text-lg'>/night</strong>
    </div>
  );
}
