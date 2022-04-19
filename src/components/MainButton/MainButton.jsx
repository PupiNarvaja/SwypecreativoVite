import React from 'react';
import { Link } from 'react-router-dom';
import './MainButton.css';

const MainButton = ({text, destiny}) => {
    return (
        <div className='button--container'>
            {destiny !== 'send' ?
            <Link to={destiny}>
                <button className='mainButton'>{text}</button>        
            </Link>                    
            :
            <button className='mainButton' type='submit' value='submit'>{text}</button>
            }
        </div>
    )
}

export default MainButton;