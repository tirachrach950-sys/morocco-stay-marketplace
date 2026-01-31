import React from 'react';
import Home from './pages/Home';
import Footer from './components/Footer';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className='min-h-screen bg-[#F8FAFC] relative selection:bg-indigo-100'>
      <Toaster position="top-center" expand={true} richColors />
      
      {/* Background blobs for that pro look */}
      <div className='absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-200/20 rounded-full blur-[120px] -z-10 animate-pulse' />
      <div className='absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/20 rounded-full blur-[120px] -z-10' />

      <nav className='bg-white/70 backdrop-blur-xl sticky top-0 z-50 border-b border-slate-100'>
        <div className='max-w-7xl mx-auto px-4 h-20 flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <div className='w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200'>
              <span className='text-white font-black text-xl'>M</span>
            </div>
            <span className='text-xl font-bold tracking-tight text-slate-900'>MOROCCO<span className='text-indigo-600'>STAY</span></span>
          </div>
          
          <div className='hidden md:flex items-center gap-8 text-sm font-bold text-slate-500'>
            <a href='#' className='hover:text-indigo-600 transition-colors'>Discover</a>
            <a href='#' className='hover:text-indigo-600 transition-colors'>Support</a>
            <button className='px-6 py-2.5 bg-slate-900 text-white rounded-xl hover:bg-indigo-600 transition-all active:scale-95 shadow-lg shadow-slate-200'>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <main className='relative z-10'>
        <Home />
      </main>

      <Footer />
    </div>
  );
}
