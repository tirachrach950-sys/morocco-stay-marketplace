import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';

interface Props {
  favorites: number[];
  toggleFavorite: (id: number) => void;
}

export default function Favorites({ favorites, toggleFavorite }: Props) {
  const favoriteProperties = properties.filter(p => favorites.includes(p.id));

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Favorites</h1>
      {favoriteProperties.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
          {favoriteProperties.map(p => (
            <PropertyCard
              key={p.id}
              property={p}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
