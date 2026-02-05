import { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Search } from 'lucide-react';

export default function Home() {
  const [query, setQuery] = useState('');
  const filtered = properties.filter(p => p.city.toLowerCase().includes(query.toLowerCase()) || p.title.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className='min-h-screen bg-[#F8FAFC]'>
      <div className='relative h-[450px] flex items-center justify-center bg-slate-900'>
        <img src='https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2000' className='absolute inset-0 w-full h-full object-cover opacity-60' />
        <div className='relative z-10 text-center w-full max-w-3xl px-6'>
          <h1 className='text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter'>Morocco<span className='text-indigo-400'>Stay.</span></h1>
          <div className='bg-white/95 backdrop-blur-lg p-2 rounded-[2rem] shadow-2xl flex items-center'>
            <Search className='text-slate-400 ml-6' size={24} />
            <input onChange={(e) => setQuery(e.target.value)} placeholder='Search your dream Riad...' className='w-full p-5 outline-none text-lg font-medium text-slate-700' />
            <button className='hidden md:block bg-indigo-600 text-white px-10 py-5 rounded-[1.5rem] font-bold hover:bg-indigo-700 transition-all'>Discover</button>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-6 -mt-12 relative z-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filtered.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </div>
    </div>
  );
}
