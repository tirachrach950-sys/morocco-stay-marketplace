import { useState, useEffect } from "react";
import { Search, MapPin, Star, Heart, Navigation, ShieldCheck, Info } from "lucide-react";

const SmartImage = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className={`relative w-full h-full bg-slate-200 overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-110"
        }`}
      />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 animate-pulse">
          <div className="w-10 h-10 border-4 border-[#8B4513]/20 border-t-[#8B4513] rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [q, setQ] = useState("");

  const properties = [
    { 
      id: 1, 
      title: "Riad Al-Fassia Palace", 
      price: "9,500", 
      city: "Marrakech", 
      rating: 4.9, 
      tag: "Medina Heritage", 
      img: "https://images.unsplash.com/photo-1590073844006-33379778ae09?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      id: 2, 
      title: "Villas d’Anfa Luxury", 
      price: "6,200", 
      city: "Casablanca", 
      rating: 4.8, 
      tag: "Modern Atlantic", 
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=1200" 
    },
    { 
      id: 3, 
      title: "Dar Blue Pearl", 
      price: "1,800", 
      city: "Chefchaouen", 
      rating: 4.7, 
      tag: "The Blue City", 
      // FIXED IMAGE LINK FOR CHEFCHAOUEN
      img: "https://images.unsplash.com/photo-1548013146-72479768bbaa?auto=format&fit=crop&q=80&w=1200" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#1A1A1A] font-sans">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-orange-100 px-8 py-5 flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#8B4513] rounded-xl flex items-center justify-center text-white font-serif text-2xl shadow-lg">M</div>
          <h1 className="text-2xl font-black uppercase tracking-tighter italic">MOROCCO<span className="text-[#8B4513]">STAY</span></h1>
        </div>
        <button className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-[#8B4513] transition-all shadow-xl">Reserve Now</button>
      </nav>

      <header className="relative h-[480px] flex items-center justify-center m-6 rounded-[3.5rem] overflow-hidden shadow-2xl">
        <SmartImage src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&q=90&w=2000" alt="Hero" className="absolute inset-0" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center w-full max-w-2xl px-6">
          <h2 className="text-6xl md:text-8xl font-serif text-white mb-8 italic drop-shadow-2xl">Find Your Sanctuary</h2>
          <div className="bg-white/95 backdrop-blur-md p-3 rounded-3xl shadow-2xl flex items-center border-4 border-white/20">
            <Search className="text-[#8B4513] ml-4" size={24} />
            <input 
                onChange={(e) => setQ(e.target.value)} 
                placeholder="Where in Morocco?" 
                className="w-full p-4 outline-none font-medium text-xl bg-transparent" 
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex justify-between items-end mb-16 border-l-4 border-[#8B4513] pl-6">
          <div>
            <h3 className="text-4xl font-serif mb-2">Heritage Collection</h3>
            <p className="text-slate-500 font-medium italic">Curated luxury for the soulful traveler</p>
          </div>
          <div className="text-xs font-black uppercase tracking-widest text-[#8B4513] flex items-center gap-2 bg-orange-50 px-4 py-2 rounded-lg border border-orange-100">
            <Info size={14}/> Currency: MAD
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {properties.filter(p => p.city.toLowerCase().includes(q.toLowerCase())).map(p => (
            <div key={p.id} className="group relative">
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-700 hover:-translate-y-3">
                <SmartImage src={p.img} alt={p.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-10 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-[#8B4513]/90 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border border-white/20">{p.tag}</span>
                    <div className="flex items-center gap-1">
                      <Star size={14} className="fill-amber-400 text-amber-400"/>
                      <span className="text-sm font-bold">{p.rating}</span>
                    </div>
                  </div>

                  <h4 className="text-4xl font-serif mb-3 leading-tight">{p.title}</h4>
                  <div className="flex items-center gap-2 text-orange-200 mb-8 font-bold text-xs uppercase tracking-[0.2em]">
                    <MapPin size={12} className="text-orange-400" /> {p.city}
                  </div>

                  <div className="flex justify-between items-end border-t border-white/10 pt-8">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-slate-400 font-black block mb-1">Stay for one night</span>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-black">{p.price}</span>
                        <span className="text-sm font-bold text-orange-300 tracking-tighter">MAD</span>
                      </div>
                    </div>
                    <button className="bg-white text-black p-5 rounded-2xl hover:bg-[#8B4513] hover:text-white transition-all shadow-xl shadow-black/20 transform group-hover:scale-110">
                      <Navigation size={22}/>
                    </button>
                  </div>
                </div>

                <button className="absolute top-8 right-8 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all border border-white/20">
                  <Heart size={20}/>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t border-slate-100 py-20 px-8 text-center mt-12">
        <div className="flex items-center justify-center gap-2 mb-6 text-[#8B4513]">
          <ShieldCheck size={28}/>
          <span className="text-xs font-black uppercase tracking-[0.4em]">Licensed Moroccan Operator</span>
        </div>
        <p className="text-slate-400 text-sm font-serif italic max-w-md mx-auto leading-relaxed">The heart of Moroccan hospitality, brought to your screen with elegance.</p>
        <p className="mt-8 text-[10px] text-slate-300 font-black uppercase tracking-widest">© 2026 MoroccoStay Luxury Group</p>
      </footer>
    </div>
  );
}