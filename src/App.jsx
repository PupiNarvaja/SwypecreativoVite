import React, {lazy, Suspense} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import WhatsAppBtn from './components/WhatsAppBtn/WhatsAppBtn';
import MainContainer from './components/MainContainer/MainContainer';
import MainTitle from './assets/images/mainTitle.png';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Error from './components/Error/Error';
import 'aos/dist/aos.css';

const Servicios = lazy(() => import('./components/Pages/Servicios/Servicios'));
const Estudio = lazy(() => import('./components/Pages/Estudio/Estudio'));
const Equipo = lazy(() => import('./components/Pages/Equipo/Equipo'));
const Clientes = lazy(() => import('./components/Pages/Clientes/Clientes'));
const Contacto = lazy(() => import('./components/Pages/Contacto/Contacto'));
const Footer = lazy(() => import('./components/Footer/Footer'));

function App() {
    setTimeout(() => {
        AOS.refreshHard();        
    }, 200);
    AOS.init({
        once: true,
        offset: 200,
	    duration: 800
    })
  return (
    <BrowserRouter>
    <ScrollToTop />
        <NavBar/>
            <Routes>
                <Route
                    path="/" 
                    exact 
                    element={ <MainContainer title={MainTitle} typeOfTitle='img' content={<Suspense fallback={null}><Home /></Suspense>} /> } 
                />
                <Route
                    path="/servicios" 
                    exact 
                    element={ <MainContainer title='Servicios' typeOfTitle='h1' content={<Suspense fallback={null}><Servicios /></Suspense>} /> } 
                />
                <Route
                    path="/estudio" 
                    exact 
                    element={ <MainContainer title='El Estudio' typeOfTitle='h1' content={<Suspense fallback={null}><Estudio /></Suspense>} /> } 
                />
                <Route
                    path="/equipo" 
                    exact 
                    element={ <MainContainer title='El Equipo' typeOfTitle='h1' content={<Suspense fallback={null}><Equipo /></Suspense>} /> } 
                />
                <Route
                    path="/clientes" 
                    exact 
                    element={ <MainContainer title='Clientes' typeOfTitle='h1' content={<Suspense fallback={null}><Clientes /></Suspense>} /> }
                />
                <Route
                    path="/contacto" 
                    exact 
                    element={ <MainContainer title='Contacto' typeOfTitle='h1' content={<Suspense fallback={null}><Contacto /></Suspense>} /> }
                />
                <Route
                    path="*"
                    element={ <Error /> }
                />
            </Routes>
            <WhatsAppBtn />
            <Suspense fallback={null}>
                <Footer />
            </Suspense>
    </BrowserRouter>
  );
}

export default App;