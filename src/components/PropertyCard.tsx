import { motion } from 'framer-motion';
import { MapPin, Star, Heart } from 'lucide-react';

export default function PropertyCard({ property }: { property: any }) {
  return (
    <motion.div whileHover={{ y: -12 }} className='bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-white'>
      <div className='relative h-64 mb-6 overflow-hidden rounded-[2rem]'>
        <img src={property.image} className='w-full h-full object-cover transition-transform duration-500 hover:scale-110' />
        <button className='absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full text-slate-600'><Heart size={18} /></button>
      </div>
      <div className='px-2'>
        <div className='flex items-center gap-1 text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-2'>
          <MapPin size={12} /> {property.city}
        </div>
        <h3 className='text-xl font-extrabold text-slate-900 mb-4'>{property.title}</h3>
        <div className='flex items-center justify-between'>
          <p className='text-2xl font-black text-slate-900'>\<span className='text-sm text-slate-400 font-normal'>/night</span></p>
          <button className='bg-slate-900 text-white px-6 py-3 rounded-2xl font-bold text-xs hover:bg-indigo-600 transition-all'>Book Now</button>
        </div>
      </div>
    </motion.div>
  );
}
