import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import logo from '../../assets/images/logo.png';
import logoWebp from '../../assets/images/logoWebp.webp';
import scrollTopOnClick from '../ScrollTopOnClick/ScrollTopOnClick';
import './NavBar.css';

const NavBar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  };
  
  const closeMenu = () => {
    setNavbarOpen(false)
  };

  const onClickFunctionWrapper = () => {
    closeMenu()
    scrollTopOnClick()
  }

  let ubicacionPrincipal = window.pageYOffset;
  window.onscroll = function () {
    let header = document.getElementById("header");
    let desplazamientoActual = window.pageYOffset;

    window.matchMedia("(min-width: 768px)").matches
      ? ubicacionPrincipal >= desplazamientoActual
        ? (header.style.top = "0")
        : (header.style.top = "-100px")
      : (header.style.top = "0");

    ubicacionPrincipal = desplazamientoActual;
    ubicacionPrincipal <= 650
      ? (header.style.backgroundColor = "rgba(246, 238, 235, .7)")
      : (header.style.backgroundColor = "rgba(246, 238, 235, .9)");
  };
  
  return (
    <header className="header" id='header'>
      <Link to="/" className='logo-link' onClick={scrollTopOnClick}>
        <picture>
          <source srcSet={logoWebp} />
          <img src={logo} alt="Logo Swype Business" className='logo'/>
        </picture>
      </Link>
      <button id='menuBtn' className={`${navbarOpen ? "is-open" : ""}`} onClick={handleToggle} aria-label='open or close menu'><span></span></button>
      <div className={`${navbarOpen ? "showMenu" : ""} nav--container`}>
        <nav id='navbar'>
            <ul className="nav__ul">
                <li><NavLink to="/estudio" onClick={onClickFunctionWrapper}>El Estudio</NavLink></li>
                <li><NavLink to="/servicios" onClick={onClickFunctionWrapper}>Servicios</NavLink></li>
                <li><NavLink to="/equipo" onClick={onClickFunctionWrapper}>El Equipo</NavLink></li>
                <li><NavLink to="/clientes" onClick={onClickFunctionWrapper}>Clientes</NavLink></li>
                <li><NavLink to="/contacto" onClick={onClickFunctionWrapper}>Contacto</NavLink></li>
            </ul>
        </nav>
        <div className='social--container'>
          <a href='https://www.instagram.com/swypecreativo/' target="_blank" rel='noreferrer noopener' aria-label='Instagram'>
            <AiFillInstagram />
          </a>
          <a href='https://www.facebook.com/swypeestudiocreativo/' target="_blank" rel='noreferrer noopener' aria-label='Facebook'>
            <AiFillFacebook />
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
