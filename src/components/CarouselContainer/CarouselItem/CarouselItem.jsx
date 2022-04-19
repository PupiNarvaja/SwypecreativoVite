import { SplideSlide } from '@splidejs/react-splide';
import './CarouselItem.css';

const CarouselItem = ({ slide }) => {
    return (
        <SplideSlide>
            {slide.id === "HomeCarousel" ? 
            <div>
                <picture>
                    <source srcSet={slide.contentB}></source>
                    <img src={slide.content} alt={slide.alt} className='home__client'></img>
                </picture>
            </div>
                : slide.id === "PhoneCarousel" ?
            <div className='max-width-374'>
                <picture>
                    <source srcSet={slide.content1}></source>
                    <img src={slide.content2} alt={slide.alt}></img>
                </picture>
            </div>
                : slide.id === "BrandCarousel" ?
            <div className='brandCarousel'>
                <div className='brandCarousel__logo--container'>
                    <picture>
                        <source srcSet={slide.logoWebp}></source>
                        <img src={slide.logo} className='brandCarousel__logo' alt={slide.alt}></img>
                    </picture>
                    <div className='shadow-box'>
                        <div className='inner--shadow'>
                            <p className='p-31'>{slide.content1}</p>
                            <p className='p-31'>{slide.content2}</p>
                            <p className='p-31'>{slide.content3}</p>
                        </div>
                    </div>               
                </div>
                <div className='brandCarousel__images--container'>
                    <picture>
                        <source srcSet={slide.image1}></source>
                        <img src={slide.imageB1} alt={slide.alt}></img>
                    </picture>
                    <picture>
                        <source srcSet={slide.image2}></source>
                        <img src={slide.imageB2} alt={slide.alt}></img>                   
                    </picture>
                </div>
            </div>
                :
            <div className='CommentsCarousel--container'>
                <p className='mb-1_66 p-31'>{slide.content}</p>
                <p className='strong p-31'>-{slide.author}</p>
            </div>
            }
        </SplideSlide>
    )
}

export default CarouselItem;