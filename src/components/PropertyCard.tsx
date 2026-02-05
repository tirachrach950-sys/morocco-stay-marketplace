import { motion } from 'framer-motion';
import { Heart, MapPin } from 'lucide-react';

interface Props { property: any }

export default function PropertyCard({ property }: Props) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className='group bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100'
    >
      <div className='relative h-64 overflow-hidden rounded-[1.5rem]'>
        <img src={property.image} className='h-full w-full object-cover transition-transform duration-700 group-hover:scale-110' alt='' />
        <button className='absolute top-4 right-4 p-3 bg-white/80 backdrop-blur-md rounded-full hover:bg-white transition-all'>
          <Heart size={18} className='text-slate-600 group-hover:text-red-500' />
        </button>
      </div>
      <div className='mt-5 px-2'>
        <div className='flex items-center gap-2 text-indigo-600 font-bold text-[10px] uppercase tracking-widest'>
          <MapPin size={12} /> {property.city}
        </div>
        <h3 className='text-lg font-bold text-slate-900 mt-1'>{property.title}</h3>
        <div className='flex items-center justify-between mt-6'>
          <p className='text-slate-900 font-black text-xl'>\<span className='text-sm text-slate-400 font-medium'>/night</span></p>
          <button className='bg-slate-900 text-white px-6 py-2 rounded-xl text-xs font-bold hover:bg-indigo-600'>Book Now</button>
        </div>
      </div>
    </motion.div>
  );
}
