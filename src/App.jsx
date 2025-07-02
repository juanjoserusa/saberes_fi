import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import QuienesSomos from './pages/QuienesSomos';
import DondeEstamos from './pages/DondeEstamos';
import CursosTarifas from './pages/CursosTarifas';
import ContactoEmail from './pages/ContactoEmail';
import NotFound from './components/NotFound';
import PoliticaPrivacidad from './pages/PoliticaPrivacidad';
import TerminosCondiciones from './pages/TerminosCondiciones';
import PoliticaCookies from './pages/PoliticaCookies';

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
          <Route path="*" element={<NotFound />} />
          <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
          <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
          <Route path="/politica-cookies" element={<PoliticaCookies />} />

        </Routes>
      </div>
       <Footer />
      </div>
    </Router>
  );
}
