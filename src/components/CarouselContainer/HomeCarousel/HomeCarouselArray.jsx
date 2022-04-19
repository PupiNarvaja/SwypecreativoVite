import client19 from '../../../assets/images/clients/client19.png';
import client5 from '../../../assets/images/clients/client5.png';
import client21 from '../../../assets/images/clients/client21.png';
import client8 from '../../../assets/images/clients/client8.png';
import client20 from '../../../assets/images/clients/client20.png';
import client23 from '../../../assets/images/clients/client23.png';

/* ---- Webp format ---- */
import client19Webp from '../../../assets/images/clients/client19Webp.webp';
import client5Webp from '../../../assets/images/clients/client5Webp.webp';
import client21Webp from '../../../assets/images/clients/client21Webp.webp';
import client8Webp from '../../../assets/images/clients/client8Webp.webp';
import client20Webp from '../../../assets/images/clients/client20Webp.webp';
import client23Webp from '../../../assets/images/clients/client23Webp.webp';


const HomeCarouselArray = () => {
    
    const slides = [
        { key:"HomeCarousel1", content: client19, contentB: client19Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel2", content: client5, contentB: client5Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel3", content: client21, contentB: client21Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel4", content: client8, contentB: client8Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel5", content: client20, contentB: client20Webp, alt:"cliente", id: "HomeCarousel" },
        { key:"HomeCarousel6", content: client23, contentB: client23Webp, alt:"cliente", id: "HomeCarousel" }
    ];
    
    return slides;
}

export default HomeCarouselArray;