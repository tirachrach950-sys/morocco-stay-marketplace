import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-white border-t border-slate-100 pt-16 pb-8 mt-20'>
      <div className='max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12'>
        <div className='col-span-1 md:col-span-1'>
          <div className='flex items-center gap-2 mb-6'>
            <div className='w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-md'>
              <span className='text-white font-black'>M</span>
            </div>
            <span className='text-lg font-bold tracking-tight'>MOROCCO<span className='text-indigo-600'>STAY</span></span>
          </div>
          <p className='text-slate-500 text-sm leading-relaxed'>
            The world's first premium marketplace for authentic Moroccan stays and experiences. Built for the modern traveler.
          </p>
        </div>
        
        <div>
          <h4 className='font-bold mb-6 text-sm uppercase tracking-widest text-slate-900'>Company</h4>
          <ul className='space-y-4 text-sm text-slate-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>About Us</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>Privacy Policy</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-6 text-sm uppercase tracking-widest text-slate-900'>Explore</h4>
          <ul className='space-y-4 text-sm text-slate-600'>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>Casablanca</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>Marrakech</li>
            <li className='hover:text-indigo-600 cursor-pointer transition-colors'>Agadir</li>
          </ul>
        </div>

        <div>
          <h4 className='font-bold mb-6 text-sm uppercase tracking-widest text-slate-900'>Newsletter</h4>
          <div className='flex gap-2 bg-slate-50 p-1.5 rounded-2xl border border-slate-100 focus-within:ring-2 focus-within:ring-indigo-500 transition-all'>
            <input type='text' placeholder='Email' className='bg-transparent px-3 py-2 text-sm w-full outline-none' />
            <button className='bg-indigo-600 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-md'>Join</button>
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-slate-50 text-center text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em]'>
        © 2026 MOROCCO-STAY. Created with ?? in Morocco.
      </div>
    </footer>
  );
}
