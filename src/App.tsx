import { useState } from 'react';
import { Search, MapPin, Star, Heart, Navigation, ShieldCheck, Info } from 'lucide-react';

export default function App() {
  const [q, setQ] = useState('');

  const properties = [
    { 
      id: 1, 
      title: 'Riad Al-Fassia Palace', 
      price: '9,500', 
      city: 'Marrakech', 
      rating: 4.9, 
      tag: 'Medina Heritage', 
      img: 'https://images.unsplash.com/photo-1590073844006-33379778ae09?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: 'Villas d’Anfa Luxury', 
      price: '6,200', 
      city: 'Casablanca', 
      rating: 4.8, 
      tag: 'Modern Atlantic', 
      img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: 'Dar Blue Pearl', 
      price: '1,800', 
      city: 'Chefchaouen', 
      rating: 4.7, 
      tag: 'The Blue City', 
      img: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=1200&auto=format&fit=crop' 
    }
  ];

  return (
    <div className='min-h-screen bg-[#FDFCFB] text-[#1A1A1A]'>
      <nav className='sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-orange-100 px-8 py-5 flex justify-between items-center shadow-sm'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 bg-[#8B4513] rounded-xl flex items-center justify-center text-white font-serif text-2xl shadow-lg'>M</div>
          <h1 className='text-2xl font-black uppercase tracking-tighter'>MOROCCO<span className='text-[#8B4513]'>STAY</span></h1>
        </div>
        <button className='bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#8B4513] transition-all shadow-xl'>Reserve Now</button>
      </nav>

      <header className='relative h-[500px] flex items-center justify-center m-6 rounded-[3.5rem] overflow-hidden shadow-2xl'>
        <img src='https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?q=80&w=2000&auto=format&fit=crop' className='absolute inset-0 w-full h-full object-cover brightness-90' loading='eager'/>
        <div className='absolute inset-0 bg-gradient-to-b from-black/20 to-black/60'/>
        <div className='relative z-10 text-center w-full max-w-3xl px-6'>
          <h2 className='text-6xl md:text-8xl font-serif text-white mb-8 italic drop-shadow-xl'>Find Your Sanctuary</h2>
          <div className='bg-white/95 backdrop-blur-md p-3 rounded-[2rem] shadow-2xl flex items-center border border-white/20'>
            <Search className='text-[#8B4513] ml-4' size={24}/>
            <input onChange={(e)=>setQ(e.target.value)} placeholder='Where in Morocco?' className='w-full p-4 outline-none font-medium text-xl bg-transparent'/>
          </div>
        </div>
      </header>

      <main className='max-w-7xl mx-auto px-8 py-24'>
        <div className='flex justify-between items-end mb-16 border-l-4 border-[#8B4513] pl-6'>
          <div>
            <h3 className='text-5xl font-serif mb-2'>Heritage Collection</h3>
            <p className='text-slate-500 text-lg font-medium italic'>Exclusive Riads & Modern Estates</p>
          </div>
          <div className='text-xs font-black uppercase tracking-widest text-[#8B4513] flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-xl border border-orange-100'>
            <Info size={14}/> Currency: MAD
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
          {properties.filter(p => p.city.toLowerCase().includes(q.toLowerCase())).map(p => (
            <div key={p.id} className='group relative'>
              <div className='relative rounded-[3rem] overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-700 hover:-translate-y-4 bg-slate-100'>
                <img src={p.img} loading='lazy' className='w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110'/>
                <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent'/>
                <div className='absolute bottom-0 left-0 right-0 p-10 text-white'>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-white/30'>{p.tag}</span>
                    <div className='flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-xl'>
                      <Star size={14} className='fill-amber-400 text-amber-400'/>
                      <span className='text-sm font-bold'>{p.rating}</span>
                    </div>
                  </div>
                  <h4 className='text-4xl font-serif mb-3 tracking-tight'>{p.title}</h4>
                  <div className='flex items-center gap-2 text-orange-200 mb-8 font-bold text-xs tracking-[0.2em] uppercase'>
                    <MapPin size={12} className='text-orange-400'/> {p.city}
                  </div>
                  <div className='flex justify-between items-end border-t border-white/10 pt-8'>
                    <div className='flex flex-col'>
                      <span className='text-slate-400 text-[10px] font-black uppercase tracking-widest mb-1'>Per Night</span>
                      <div className='flex items-baseline gap-2'>
                        <span className='text-5xl font-black text-white'>{p.price}</span>
                        <span className='text-sm font-bold text-orange-300'>MAD</span>
                      </div>
                    </div>
                    <button className='bg-white text-black p-5 rounded-2xl hover:bg-[#8B4513] hover:text-white transition-all shadow-xl'>
                      <Navigation size={24}/>
                    </button>
                  </div>
                </div>
                <button className='absolute top-8 right-8 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all border border-white/20'>
                  <Heart size={22}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className='bg-white border-t border-slate-100 py-20 px-8 text-center'>
        <div className='flex items-center justify-center gap-3 mb-6 text-[#8B4513]'>
          <ShieldCheck size={28}/>
          <span className='text-xs font-black uppercase tracking-[0.4em]'>Licensed Moroccan Operator</span>
        </div>
        <p className='text-slate-400 text-sm font-serif italic max-w-lg mx-auto leading-relaxed'>The heart of Moroccan hospitality, brought to your screen with elegance.</p>
        <p className='mt-8 text-[10px] text-slate-300 font-black uppercase tracking-widest'>© 2026 MoroccoStay Luxury Group</p>
      </footer>
    </div>
  );
}