import CarouselItem from "../CarouselItem/CarouselItem";

const CarouselMaping = ({ slides }) => {
    // Mapeamos el array recibido en Carousel para enviar por cada elemento del array, un componente "slide" de cada carousel.
    return (
        <>
            {slides.map((slide) => <CarouselItem slide={slide} key={slide.key} />)}
        </>
    )
}

export default CarouselMaping;