import React from 'react';
import MainButton from '../MainButton/MainButton';
import './Error.css';

const Error = () => {
  return (
    <div id='error'>
      <div className="error--container" data-aos="fade-up">
        <h1 className="title mb-3_5 error">ERROR 404</h1>
        <h2 className="title-error error">Página no encontrada</h2>
        <MainButton text="Volver al inicio" destiny="/"/>
      </div>
    </div>
  )
};

export default Error;