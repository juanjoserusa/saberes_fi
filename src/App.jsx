import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import DondeEstamos from './pages/DondeEstamos';
import CursosTarifas from './pages/CursosTarifas';
import ContactoEmail from './pages/ContactoEmail';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-200">
      <Navbar />
      <div className="p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/donde-estamos" element={<DondeEstamos />} />
          <Route path="/cursos-tarifas" element={<CursosTarifas />} />
          <Route path="/contacto" element={<ContactoEmail />} />
        </Routes>
      </div>
       <Footer />
      </div>
    </Router>
  );
}
