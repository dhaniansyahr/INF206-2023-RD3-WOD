import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { WavyContainer } from 'react-wavy-transitions';

// Import Pages and Component
// import Home from './pages/Home';
import HomePage from './pages/LandingPage/HomePage'
import PartnerWithUsPage from './pages/LandingPage/PartnerWithUsPage'
import HelpPage from './pages/LandingPage/HelpPage'
import AboutUsPage from './pages/LandingPage/AboutUsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Pemesanan from './pages/UserPage/Pemesanan';
import AkunSaya from './pages/UserPage/AkunSaya';
import InformasiPemesanan from './pages/UserPage/InformasiPemesanan';
import Pembayaran from './pages/UserPage/Pembayaran';
import PemesananDriver from "./pages/DriverPage/Pemesanan";
import RiwayatPemesananDriver from "./pages/DriverPage/RiwayatPemesananDriver";

function App() {
  return (
    <div className='bg-white font-sans'>
      <BrowserRouter>
        <WavyContainer />
        <Routes>
          <Route
            // Unutk Path nya 
            path='/'
            // Untuk akses Component Pages
            element={<HomePage />}
          />
          <Route path='/home' element={<HomePage />} />
          <Route path='/partnerwithus' element={<PartnerWithUsPage />} />
          <Route path='/help' element={<HelpPage />} />
          <Route path='/aboutus' element={<AboutUsPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/Signup' element={<SignUpPage />} />
          <Route path='/pemesanan' element={<Pemesanan />} />
          <Route path='/akun-saya' element={<AkunSaya />} />
          <Route path='/informasi-pemesanan' element={<InformasiPemesanan />} />
          <Route path='/pembayaran' element={<Pembayaran />} />
          <Route path="/pemesanan-driver" element={<PemesananDriver />} />
          <Route path="/riwayat-driver" element={<RiwayatPemesananDriver />} />  

        </Routes>
      </BrowserRouter >
    </div >
  );
};

export default App;
