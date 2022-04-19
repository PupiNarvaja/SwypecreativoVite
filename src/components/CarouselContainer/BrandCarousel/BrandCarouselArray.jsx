import logoGordon from '../../../assets/images/clients/client9.png';
import image1Gordon from '../../../assets/images/clients/gordon1.png';
import image2Gordon from '../../../assets/images/clients/gordon2.png';

import logoCalaca from '../../../assets/images/clients/client6.png';
import image1Calaca from '../../../assets/images/clients/calaca1.png';
import image2Calaca from '../../../assets/images/clients/calaca2.png';

import logoBergese from '../../../assets/images/clients/client5.png';
import image1Bergese from '../../../assets/images/clients/bergese1.png';
import image2Bergese from '../../../assets/images/clients/bergese2.png';

import logoJz from '../../../assets/images/clients/client13.png';
import image1Jz from '../../../assets/images/clients/jz1.png';
import image2Jz from '../../../assets/images/clients/jz2.png';

/* WebP format */
import logoGordonWebp from '../../../assets/images/clients/client9Webp.webp';
import image1GordonWebp from '../../../assets/images/clients/gordon1Webp.webp';
import image2GordonWebp from '../../../assets/images/clients/gordon2Webp.webp';

import logoCalacaWebp from '../../../assets/images/clients/client6Webp.webp';
import image1CalacaWebp from '../../../assets/images/clients/calaca1Webp.webp';
import image2CalacaWebp from '../../../assets/images/clients/calaca2Webp.webp';

import logoBergeseWebp from '../../../assets/images/clients/client5Webp.webp';
import image1BergeseWebp from '../../../assets/images/clients/bergese1Webp.webp';
import image2BergeseWebp from '../../../assets/images/clients/bergese2Webp.webp';

import logoJzWebp from '../../../assets/images/clients/client13Webp.webp';
import image1JzWebp from '../../../assets/images/clients/jz1Webp.webp';
import image2JzWebp from '../../../assets/images/clients/jz2Webp.webp';

const BrandCarouselArray = () => {

    const slides = [
        { key:"BrandCarousel1", logoWebp: logoGordonWebp, logo: logoGordon, content1: "Emprendimiento de comida take-away y delivery.", content2: "Jesús María.", content3: "Trabajo realizado: Creación de identidad, diseño gráfico, creación de estrategia y asesoría de marketing digital, gestión de redes sociales.", image1: image1GordonWebp, image2: image2GordonWebp, imageB1: image1Gordon, imageB2: image2Gordon, id: "BrandCarousel", alt: "Cliente de Swype"},
        { key:"BrandCarousel2", logoWebp: logoCalacaWebp, logo: logoCalaca, content1: "Venta de insumos para el autocultivo y consumo de cannabis y venta de tabaco.", content2: "Colonia Caroya.", content3: "Trabajos realizados: Creación de identidad, diseño gráfico, creación de estrategia y asesoría de marketing, gestión de redes sociales.", image1: image1CalacaWebp, image2: image2CalacaWebp, imageB1: image1Calaca, imageB2: image2Calaca, id: "BrandCarousel", alt: "Cliente de Swype"},
        { key:"BrandCarousel3", logoWebp: logoBergeseWebp, logo: logoBergese, content1: "Venta de materiales para la construcción.", content2: "Colonia Caroya.", content3: "Trabajos realizados: Estrategia de marketing digital, rediseño de logo, gestión de redes sociales.", image1: image1BergeseWebp, image2: image2BergeseWebp, imageB1: image1Bergese, imageB2: image2Bergese, id: "BrandCarousel", alt: "Cliente de Swype"},
        { key:"BrandCarousel4", logoWebp: logoJzWebp, logo: logoJz, content1: "Consultorio de estética.", content2: "Jesús María.", content3: "Trabajos realizados: Diseño de identidad.", image1: image1JzWebp, image2: image2JzWebp, imageB1: image1Jz, imageB2: image2Jz, id: "BrandCarousel", alt: "Cliente de Swype"}
    ];
    
    return slides;
}

export default BrandCarouselArray;