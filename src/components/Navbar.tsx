import { motion } from 'framer-motion';
import { Home as HomeIcon, Heart, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100'>
      <div className='max-w-7xl mx-auto px-6 h-20 flex items-center justify-between'>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className='text-2xl font-black text-indigo-600 tracking-tight'
        >
          MOROCCO<span className='text-slate-900'>STAY</span>
        </motion.div>

        <div className='hidden md:flex items-center gap-8'>
          <a href='#' className='text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors'>Explore</a>
          <a href='#' className='text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors'>Experiences</a>
        </div>

        <div className='flex items-center gap-4'>
          <button className='p-2 text-slate-400 hover:text-indigo-600'><Heart size={20} /></button>
          <button className='flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-600 transition-all'>
            <User size={16} /> Login
          </button>
        </div>
      </div>
    </nav>
  );
}
