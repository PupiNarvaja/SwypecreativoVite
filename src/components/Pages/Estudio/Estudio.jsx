import React from 'react';
import logo from '../../../assets/images/logo.png';
import './Estudio.css';

//Import images
import chat from '../../../assets/images/icons/chat.png';
import settings from '../../../assets/images/icons/settings.png';
import lightbulb from '../../../assets/images/icons/lightbulb.png';
/* Webp format */
import chatWebp from '../../../assets/images/icons/chatWebp.webp';
import settingsWebp from '../../../assets/images/icons/settingsWebp.webp';
import lightbulbWebp from '../../../assets/images/icons/lightbulbWebp.webp';


const Estudio = () => {
  return (
      <section id='estudio'>
        <div data-aos="fade-up">
          <h2 className='title mb-3_5'>¿Quiénes somos?</h2>
          <div className='principal--container mb-4_5'>
            <div className='text--container'>
              <p className='mb-1_66 p-31'>Somos un grupo de profesionales de Diseño y Marketing digital.</p>
              <p className='mb-1_66 p-31'>Contamos con conocimientos y experiencias internacionales que abarcan una amplia gama de aspectos: diseño, comunicación, publicidad, marketing, entre otros.</p>
              <p className='mb-1_66 p-31'>Brindamos servicios de excelencia, pensados en brindar la mejor experiencia al usuario, con una apertura global y colectiva.</p>
            </div>
            <picture className='picture--image'>
              <source srcSet={chatWebp}></source>
              <img src={chat} alt='Chat'></img>
            </picture>
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className='title mb-3_5'>¿Cómo trabajamos?</h2>
          <div className='principal--container mb-4_5 h-335'>
            <div className='text--container'>
              <p className='mb-1_66 p-31'>Trabajamos involucrándonos completamente en cada proyecto, la pasión por mejorar y brindar un servicio de calidad marcan el rumbo de nuestro trabajo.</p>
            </div>
            <picture className='picture--image'>
              <source srcSet={settingsWebp}></source>
              <img src={settings} alt='Settings'></img>
            </picture>
          </div>
        </div>

        <div data-aos="fade-up">
          <h2 className='title mb-3_5'>¿Cómo nace 
              <img src={logo} alt="Logo Swype Business" className='logo--title'/>
              ?
          </h2>
          <div className='principal--container mb-4_5 h-370'>
            <div className='text--container'>
              <p className='mb-1_66 p-31'>SWYPE nace como un estudio creativo integral de nueva generación para dar respuesta a los retos que la publicidad, la comunicación y la venta deben afrontar en un entorno de mercado en constante cambio.</p>
            </div>
            <picture className='picture--image'>
              <source srcSet={lightbulbWebp}></source>
              <img src={lightbulb} alt='Lightbulb'></img>
            </picture>
          </div>
        </div>
      </section>
  )
}

export default Estudio;