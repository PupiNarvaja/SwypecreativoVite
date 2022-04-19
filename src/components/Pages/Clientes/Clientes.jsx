import React, {lazy, Suspense} from 'react';
import PhoneCarouselArray from '../../CarouselContainer/PhoneCarousel/PhoneCarouselArray';
import BrandCarouselArray from '../../CarouselContainer/BrandCarousel/BrandCarouselArray';
import CommentsCarouselArray from '../../CarouselContainer/CommentsCarousel/CommentsCarouselArray';
import './Clientes.css';
import client1 from '../../../assets/images/clients/client1.png';
import client2 from '../../../assets/images/clients/client2.png';
import client3 from '../../../assets/images/clients/client3.png';
import client4 from '../../../assets/images/clients/client4.png';
import client5 from '../../../assets/images/clients/client5.png';
import client6 from '../../../assets/images/clients/client6.png';
import client7 from '../../../assets/images/clients/client7.png';
import client8 from '../../../assets/images/clients/client8.png';
import client9 from '../../../assets/images/clients/client9.png';
import client10 from '../../../assets/images/clients/client10.png';
import client11 from '../../../assets/images/clients/client11.png';
import client12 from '../../../assets/images/clients/client12.png';
import client13 from '../../../assets/images/clients/client13.png';
import client14 from '../../../assets/images/clients/client14.png';
import client15 from '../../../assets/images/clients/client15.png';
import client16 from '../../../assets/images/clients/client16.png';
import client17 from '../../../assets/images/clients/client17.png';
import client18 from '../../../assets/images/clients/client18.png';
import client19 from '../../../assets/images/clients/client19.png';

/* ---- Webp format ---- */
import client1Webp from '../../../assets/images/clients/client1Webp.webp';
import client2Webp from '../../../assets/images/clients/client2Webp.webp';
import client3Webp from '../../../assets/images/clients/client3Webp.webp';
import client4Webp from '../../../assets/images/clients/client4Webp.webp';
import client5Webp from '../../../assets/images/clients/client5Webp.webp';
import client6Webp from '../../../assets/images/clients/client6Webp.webp';
import client7Webp from '../../../assets/images/clients/client7Webp.webp';
import client8Webp from '../../../assets/images/clients/client8Webp.webp';
import client9Webp from '../../../assets/images/clients/client9Webp.webp';
import client10Webp from '../../../assets/images/clients/client10Webp.webp';
import client11Webp from '../../../assets/images/clients/client11Webp.webp';
import client12Webp from '../../../assets/images/clients/client12Webp.webp';
import client13Webp from '../../../assets/images/clients/client13Webp.webp';
import client14Webp from '../../../assets/images/clients/client14Webp.webp';
import client15Webp from '../../../assets/images/clients/client15Webp.webp';
import client16Webp from '../../../assets/images/clients/client16Webp.webp';
import client17Webp from '../../../assets/images/clients/client17Webp.webp';
import client18Webp from '../../../assets/images/clients/client18Webp.webp';
import client19Webp from '../../../assets/images/clients/client19Webp.webp';
const Carousel = lazy(() => import('../../CarouselContainer/Carousel/Carousel'));

const Clientes = () => {

    const clients = [
        {webp: client1Webp, img: client1, key: "client1"},
        {webp: client2Webp, img: client2, key: "client2"},
        {webp: client3Webp, img: client3, key: "client3"},
        {webp: client4Webp, img: client4, key: "client4"},
        {webp: client5Webp, img: client5, key: "client5"},
        {webp: client6Webp, img: client6, key: "client6"},
        {webp: client7Webp, img: client7, key: "client7"},
        {webp: client8Webp, img: client8, key: "client8"},
        {webp: client9Webp, img: client9, key: "client9"},
        {webp: client10Webp, img: client10, key: "client10"},
        {webp: client11Webp, img: client11, key: "client11"},
        {webp: client12Webp, img: client12, key: "client12"},
        {webp: client13Webp, img: client13, key: "client13"},
        {webp: client14Webp, img: client14, key: "client14"},
        {webp: client15Webp, img: client15, key: "client15"},
        {webp: client16Webp, img: client16, key: "client16"},
        {webp: client17Webp, img: client17, key: "client17"},
        {webp: client18Webp, img: client18, key: "client18"},
        {webp: client19Webp, img: client19, key: "client19"}
    ];

    // for (let i = 1; i < 20; i++) {
    //     clients.push({
    //         webp: `client${[i]}Webp`,
    //         img: "client`${[i]}",
    //         key: `client${[i]}`
    //     })
    // }

    return (
        <div className='clientes container'>
            <div className='icons' data-aos="fade-up">
           { clients.map((client) => {
                return (
                    <picture key={client.key}>
                        <source srcSet={client.webp} />
                        <img src={client.img} alt='cliente' max-width='158' max-height='158' />
                    </picture>
                )
            })}
            </div>
            <div className='my-156'>
                <Suspense fallback={null}>
                    <Carousel slides={BrandCarouselArray()} perPage={1} perPageBreakPoint={1} center='center' />
                </Suspense>
            </div>
            <div className='my-156'>
                <Suspense fallback={null}>
                    <Carousel slides={PhoneCarouselArray()} perPage={3} perPageBreakPoint={1} center='center' />
                </Suspense>
            </div>
            <div className='my-156'>
                <h2 className='title-72'>Comentarios</h2>
                <Suspense fallback={null}>
                    <Carousel slides={CommentsCarouselArray()} perPage={1} perPageBreakPoint={1} center='center' />
                </Suspense>
            </div>
        </div>
    )
}

export default Clientes;
