import phone1 from '../../../assets/images/clients/phone1.png';
import phone2 from '../../../assets/images/clients/phone2.png';
import phone3 from '../../../assets/images/clients/phone3.png';

/* Webp format */
import phone1Webp from '../../../assets/images/clients/phone1Webp.webp';
import phone2Webp from '../../../assets/images/clients/phone2Webp.webp';
import phone3Webp from '../../../assets/images/clients/phone3Webp.webp';

const PhoneCarouselArray = () => {

    const slides = [
        { key:"PhoneCarousel1", content1: phone1Webp, content2: phone1, alt:"instagram de clientes", id: "PhoneCarousel"},
        { key:"PhoneCarousel2", content1: phone2Webp, content2: phone2, alt:"instagram de clientes", id: "PhoneCarousel"},
        { key:"PhoneCarousel3", content1: phone3Webp, content2: phone3, alt:"instagram de clientes", id: "PhoneCarousel"}
    ];

    return slides;
}

export default PhoneCarouselArray;