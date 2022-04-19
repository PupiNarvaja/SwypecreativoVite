import React from 'react';
import './WhatsAppBtn.css';
import wppIcon from '../../assets/images/wppIcon.svg';

const WhatsAppBtn = () => {
    return (
        <div>
            <a href='https://wa.me/3513496762' target='_blank' rel='noreferrer noopener'>
                <img src={wppIcon} alt='WhatssApp icon' className='wpp-icon'></img>
            </a>
        </div>
    )
}

export default WhatsAppBtn;