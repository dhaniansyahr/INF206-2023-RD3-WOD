import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Pages and Component
// import Home from './pages/Home';
import HomePage from './pages/LandingPage/HomePage'
import PartnerWithUsPage from './pages/LandingPage/PartnerWithUsPage'
import HelpPage from './pages/LandingPage/HelpPage'
import AboutUsPage from './pages/LandingPage/AboutUsPage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import Home from './pages/Home';
import Pemesanan from "./pages/UserPage/Pemesanan";

function App() {
  return (
    <div className='bg-white font-sans'>
      <BrowserRouter>
        <div className='max-w-screen'>
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
            <Route path="/pemesanan" element={<Pemesanan />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
