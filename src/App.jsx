import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import './index.css';

function App() {
  return (
  
   <Router basename={import.meta.env.VITE_NETLIFY === 'true' ? '/' : '/chariot-agricole'}>
      <div className="app-container">
        {/* La Navbar de l'exploitation visible partout */}
        <Navbar />
        
        {/* Affichage dynamique de la page demandée */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;