import React from 'react';
import lautaro from '../../../assets/images/lautaro.png';
import lautaroWebp from '../../../assets/images/lautaroWebp.webp';
import nicolas from '../../../assets/images/nicolas.png';
import nicolasWebp from '../../../assets/images/nicolasWebp.webp';
import julieta from '../../../assets/images/julieta.png';
import julietaWebp from '../../../assets/images/julietaWebp.webp';
import lucia from '../../../assets/images/lucia.png';
import luciaWebp from '../../../assets/images/luciaWebp.webp';
import './Equipo.css';

const Equipo = () => {
  return (
    <div className='equipo'>
       <div className='lautaro--container equipoContainer' data-aos="fade-up" data-aos-offset='250'>
          <div className='info'>
            <h2 className='h-72'>Lautaro Alvarez</h2>
            <ul>
              <li><p className='p-40'>Co-founder</p></li>
              <li><p className='p-40'>Encargado de Marketing Digital</p></li>
              <li><p className='p-40'>Paid Media Manager</p></li>
            </ul>
          </div>
          <div className='equipo--shadow'>
            <div className='inner--shadow'>
              <picture>
                <source srcSet={lautaroWebp} />
                <img src={lautaro} alt='Lautaro Alvarez, co-founder del equipo'></img>
              </picture>
            </div>
          </div>
       </div>
       <div className='nicolas--container equipoContainer' data-aos="fade-up" data-aos-offset='250'>
          <div className='info'>
            <h2 className='h-72'>Nicolás Audi</h2>
            <ul>
              <li><p className='p-40'>Co-founder</p></li>
              <li><p className='p-40'>Diseñador Gráfico</p></li>
            </ul>
          </div>
          <div className='equipo--shadow'>
            <div className='inner--shadow'>
              <picture>
                <source srcSet={nicolasWebp} />
                <img src={nicolas} alt='Nicolás Audi, co-founder del equipo'></img>
              </picture>
            </div>
          </div>
       </div>
       <div className='julieta--container equipoContainer' data-aos="fade-up" data-aos-offset='250'>
          <div className='info'>
            <h2 className='h-72'>Julieta Maldonado</h2>
            <ul>
              <li><p className='p-40'>Lic. en Cine y Tv</p></li>
              <li><p className='p-40'>Community Manager</p></li>
              <li><p className='p-40'>Diseñadora gráfica</p></li>
              <li><p className='p-40'>Fotografía</p></li>
            </ul>
          </div>
          <div className='equipo--shadow'>
            <div className='inner--shadow'>
              <picture>
                <source srcSet={julietaWebp} />
                <img src={julieta} alt='Julieta Maldonado, miembro del equipo'></img>
              </picture>
            </div>
          </div>
       </div>
       <div className='lucia--container equipoContainer' data-aos="fade-up" data-aos-offset='250'>
          <div className='info'>
            <h2 className='h-72'>Lucía Ortega</h2>
            <ul>
              <li><p className='p-40'>Técnica superior en diseño gráfico publicitario</p></li>
            </ul>
          </div>
          <div className='equipo--shadow'>
            <div className='inner--shadow'>
              <picture>
                <source srcSet={luciaWebp} />
                <img src={lucia} alt='Lucia Ortega, miembro del equipo'></img>
              </picture>
            </div>
          </div>
       </div>
    </div>
  )
}

export default Equipo;