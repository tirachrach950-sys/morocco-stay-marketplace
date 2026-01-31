import React, { useState } from 'react';
import { Heart, MapPin, Star, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function PropertyCard({ property }: any) {
  const [favorite, setFavorite] = useState(false);

  const handleBook = () => {
    toast.success('Booking initiated for ' + property.title, {
      description: 'Redirecting you to secure checkout...',
      icon: '?',
    });
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      className='group relative bg-white rounded-[2.5rem] p-4 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover-xl)] transition-all duration-500'
    >
      <div className='relative h-64 w-full overflow-hidden rounded-[2rem]'>
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={property.image}
          alt={property.title}
          className='h-full w-full object-cover'
        />
        
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          onClick={() => {
            setFavorite(!favorite);
            if(!favorite) toast('Added to Wishlist', { icon: '??' });
          }}
          className='absolute top-4 right-4 p-3 rounded-full glass-card z-10'
        >
          <Heart 
            size={20} 
            fill={favorite ? "#ef4444" : "none"}
            className={favorite ? "text-red-500" : "text-slate-700"}
          />
        </motion.button>

        <div className='absolute bottom-4 left-4 glass-card px-4 py-2 rounded-2xl text-slate-900 font-bold'>
          {"$"}{property.price} <span className='text-[10px] opacity-60 uppercase'>/ night</span>
        </div>
      </div>

      <div className='px-2 py-5'>
        <div className='flex items-center gap-1 text-indigo-600 mb-1'>
          <MapPin size={12} strokeWidth={3} />
          <span className='text-[10px] font-black uppercase tracking-widest'>{property.city}</span>
        </div>
        
        <h3 className='text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors'>
          {property.title}
        </h3>

        <div className='mt-6 flex items-center justify-between'>
          <div className='flex items-center gap-1'>
            <Star size={14} className='fill-amber-400 text-amber-400' />
            <span className='text-sm font-bold'>4.9</span>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBook}
            className='bg-slate-900 text-white px-6 py-2.5 rounded-xl text-xs font-black hover:bg-indigo-600 transition-colors shadow-lg shadow-slate-200'
          >
            BOOK NOW
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
