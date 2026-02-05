import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function PropertyCard({ property }: { property: any }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300'
    >
      <div className='relative h-60'>
        <img src={property.image} className='w-full h-full object-cover' alt={property.title} />
      </div>
      <div className='p-6'>
        <div className='flex items-center gap-1 text-indigo-600 font-bold text-[10px] uppercase tracking-tighter'>
          <MapPin size={12} /> {property.city}
        </div>
        <h3 className='text-xl font-bold text-slate-900 mt-2'>{property.title}</h3>
        <div className='flex items-center justify-between mt-6'>
          <div>
            <span className='text-2xl font-black text-slate-900'>\</span>
            <span className='text-sm text-slate-400'> /night</span>
          </div>
          <button className='bg-slate-900 text-white px-6 py-2 rounded-xl text-sm font-bold hover:bg-indigo-600 transition-colors'>
            Book
          </button>
        </div>
      </div>
    </motion.div>
  );
}
