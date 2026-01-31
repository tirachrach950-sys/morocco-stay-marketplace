import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties } from '../data/properties';
import { Search, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = properties.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='max-w-7xl mx-auto px-4 py-12'>
      <div className='flex flex-col items-center mb-16'>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className='flex items-center gap-2 bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-4'
        >
          <Sparkles size={14} />
          Luxury Stays
        </motion.div>
        <h1 className='text-5xl font-black text-center text-slate-900 mb-8'>
          Find your dream <span className='text-indigo-600'>Riad.</span>
        </h1>

        {/* Search Bar with Focus Animation */}
        <motion.div 
          whileFocusWithin={{ scale: 1.02 }}
          className='relative w-full max-w-2xl'
        >
          <Search className='absolute left-5 top-1/2 -translate-y-1/2 text-slate-400' size={20} />
          <input 
            type='text'
            placeholder='Where do you want to go?'
            className='w-full pl-14 pr-6 py-5 bg-white rounded-[2rem] shadow-lg border border-transparent focus:border-indigo-200 outline-none transition-all text-slate-700'
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </motion.div>
      </div>

      <motion.div 
        layout
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'
      >
        {filtered.map((p) => (
          <PropertyCard key={p.id} property={p} />
        ))}
      </motion.div>
    </div>
  );
}
