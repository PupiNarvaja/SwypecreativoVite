import React from "react";
import mainTitleWebp from '../../assets/images/mainTitleWebp.webp'
import './MainContainer.css';

const MainContainer = ({ title, typeOfTitle, content }) => {
    return (
        <>
            <div className='main'>
                <div className='main--container container'>
                    {typeOfTitle === 'img' ?
                    <picture>
                        <source type="image/webp" srcSet={mainTitleWebp}></source>
                        <img src={title} alt='Main title' className='main--title--img block' width='638' height='351'></img>
                    </picture>
                    :
                    <h1 className='main--title'>{title}</h1>}
                </div>
            </div>
            {content}
        </>
    )
}

export default MainContainer;