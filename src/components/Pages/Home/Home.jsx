import React, {lazy, Suspense} from 'react';
import './Home.css';
import MainButton from '../../MainButton/MainButton';
import HomeCarouselArray from '../../CarouselContainer/HomeCarousel/HomeCarouselArray';
import { Link } from 'react-router-dom';
import lautaro from '../../../assets/images/lautaroCircle.png';
import lautaroWebp from '../../../assets/images/lautaroCircleWebp.webp';
import nicolas from '../../../assets/images/nicolasCircle.png';
import nicolasWebp from '../../../assets/images/nicolasCircleWebp.webp';
import julieta from '../../../assets/images/julietaCircle.png';
import julietaWebp from '../../../assets/images/julietaCircleWebp.webp';
import lucia from '../../../assets/images/luciaCircle.png';
import luciaWebp from '../../../assets/images/luciaCircleWebp.webp';
import creatividadYDiseno from '../../../assets/images/icons/HOME_CREATIVIDAD_Y_DISEÑO.png'
import marketingYComunicacion from '../../../assets/images/icons/HOME_MARKETING.png'
import gestionDeRedesSociales from '../../../assets/images/icons/HOME_GESTION_RRSS.png'
import creatividadYDisenoWebp from '../../../assets/images/icons/HOME_CREATIVIDAD_Y_DISEÑO_WEBP.webp'
import marketingYComunicacionWebp from '../../../assets/images/icons/HOME_MARKETING_WEBP.webp'
import gestionDeRedesSocialesWebp from '../../../assets/images/icons/HOME_GESTION_RRSS_WEBP.webp'
const Carousel = lazy(() => import('../../CarouselContainer/Carousel/Carousel'));

const Home = () => {
    return (
        <>
            <div className='estudio--container' data-aos="fade-up">
                <h2 className='title'>El Estudio</h2>
                <div className='estudio--p'>
                    <p className='p-24'>Somos un grupo de profesionales de Diseño y Marketing digital.</p>
                    <br></br>
                    <p className='p-24'>Contamos con conocimientos y experiencias internacionales que abarcan una amplia gama de aspectos: diseño, comunicación, publicidad, marketing, entre otros.</p>
                    <br></br>
                    <p className='p-24'>Brindamos servicios de excelencia, pensados en brindar la mejor experiencia al usuario, con una apertura global y colectiva.</p>
                </div>
                <MainButton text="Conocé más" destiny="/estudio"/>
            </div>
            <div className='servicios--container container' data-aos="fade-up">
                <h2 className='title'>Servicios</h2>
                <div className='servicios--wrapper'>
                    <div className='servicios--card card-1'>
                        <h3 className='servicios--title'>Creatividad y Diseño</h3>
                        <Link to={{pathname: "/servicios", hash: "#creatividad-y-diseno"}} aria-label='Enlace a la sección creatividad y diseño'>
                            <div className='circle max-w-152'>
                                <picture>
                                    <source srcSet={creatividadYDisenoWebp} />
                                    <img src={creatividadYDiseno} className='max-w-152' alt='Creatividad y diseño' />
                                </picture>
                            </div>
                        </Link>
                        <p className='p-24'>Invertí en la empresa que sos, para convertirte en la empresa que querés ser.</p>
                    </div>
                    <div className='servicios--card card-2'>
                        <h3 className='servicios--title'>Marketing y Comunicación</h3>
                        <Link to={{pathname: "/servicios", hash: "#marketing-y-comunicacion"}} aria-label='Enlace a la sección marketing y comunicación'>
                            <div className='circle max-w-152'>
                                <picture>
                                    <source srcSet={marketingYComunicacionWebp} />
                                    <img src={marketingYComunicacion} className='max-w-152' alt='Marketing y comunicación' />
                                </picture>
                            </div>
                        </Link>
                        <p className='p-24'>En los detalles está la diferencia. Más funcionalidad. <br></br>Más impacto.</p>
                    </div>
                    <div className='servicios--card card-3'>
                        <h3 className='servicios--title'>Gestión de redes sociales</h3>
                        <Link to={{pathname: "/servicios", hash: "#gestion-de-redes-sociales"}} aria-label='Enlace a la sección gestion de redes sociales'>
                            <div className='circle max-w-152'>
                                <picture>
                                    <source srcSet={gestionDeRedesSocialesWebp} />
                                    <img src={gestionDeRedesSociales} className='max-w-152' alt='Gestión de redes sociales' />
                                </picture>
                            </div>
                        </Link>
                        <p className='p-24'>El éxito está en interactuar mientras los demás solo postean.</p>
                    </div>
                </div>
            </div>
            <div className='equipo--wrapper'>
                <div className='equipo--container container' data-aos="fade-up">
                    <h2 className='title'>El Equipo</h2>
                    <div className='users--container'>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={lautaroWebp}></source>
                                <img src={lautaro} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={julietaWebp}></source>
                                <img src={julieta} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={nicolasWebp}></source>
                                <img src={nicolas} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                        <div className='max-width-313'>
                            <picture>
                                <source srcSet={luciaWebp}></source>
                                <img src={lucia} alt='miembro del equipo'></img>
                            </picture>
                        </div>
                    </div>
                </div>
                <MainButton text="Conocé más" destiny="/equipo"/>
            </div>
            <div className='clientes--container' data-aos="fade-up">
                <h2 className='title container'>Clientes</h2>
                <Suspense fallback={null}>
                    <Carousel slides={HomeCarouselArray()} perPage={4} perPageBreakPoint={3} center={false} />
                </Suspense>
                <MainButton text="Conocé más" destiny="/clientes"/>
            </div>
        </>
    )
}

export default Home;
