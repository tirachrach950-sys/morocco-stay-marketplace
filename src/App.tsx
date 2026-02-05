import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
export default App;
