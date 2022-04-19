import React from "react";
import './Servicios.css';

import disenoGrafico from '../../../assets/images/icons/disenoGrafico.png';
import fotografia from '../../../assets/images/icons/fotografia.png';
import marketingDigital from '../../../assets/images/icons/marketingDigital.png';
import marketingTradicional from '../../../assets/images/icons/marketingTradicional.png';
import communityManager from '../../../assets/images/icons/communityManager.png';
import gestionDeComunidades from '../../../assets/images/icons/gestionDeComunidades.png';
import publicidadDigital from '../../../assets/images/icons/publicidadDigital.png';
import desarrolloWeb from '../../../assets/images/icons/desarrolloWeb.png';
import desarrolloUxUi from '../../../assets/images/icons/desarrolloUxUi.png';

/* Webp format */
import disenoGraficoWebp from '../../../assets/images/icons/disenoGraficoWebp.webp';
import fotografiaWebp from '../../../assets/images/icons/fotografiaWebp.webp';
import marketingDigitalWebp from '../../../assets/images/icons/marketingDigitalWebp.webp';
import marketingTradicionalWebp from '../../../assets/images/icons/marketingTradicionalWebp.webp';
import communityManagerWebp from '../../../assets/images/icons/communityManagerWebp.webp';
import gestionDeComunidadesWebp from '../../../assets/images/icons/gestionDeComunidadesWebp.webp';
import publicidadDigitalWebp from '../../../assets/images/icons/publicidadDigitalWebp.webp';
import desarrolloWebWebp from '../../../assets/images/icons/desarrolloWebWebp.webp';
import desarrolloUxUiWebp from '../../../assets/images/icons/desarrolloUxUiWebp.webp';

const Servicios = () => {
    return (
        <div className="servicios">
            <section id="creatividad-y-diseno" className="creatividadYDiseno">
                <h2 className="title title-90" data-aos="fade-up">Creatividad Y Diseño</h2>
                <h3 className="title-48" data-aos="fade-up">Invertí en la empresa que sos, para convertirte en la empresa que querés ser.</h3>
                <p className="creatividadYDiseno__description description p-31" data-aos="fade-up">Mejoramos la calidad comunicacional de tu empresa. La identidad de marca determina la solidez y seriedad de un negocio. Creamos no sólo atracción visual, sino piezas que comuniquen bien e impacten.</p>
                <div data-aos="fade-up">
                    <div className="disenoGrafico--title servicios__title">
                        <picture>
                            <source srcSet={disenoGraficoWebp}></source>
                            <img src={disenoGrafico} alt='diseño grafico'></img>
                        </picture>
                        <h4 className="title-72 mb-1_66 absolute">Diseño Gráfico</h4>
                    </div>
                    <div className="shadow-box">
                        <div className="disenoGrafico--div inner--shadow grid-2-cols">
                            <div>
                                <p className="p-31">Identidad corporativa</p>
                                <p className="p-31">Diseño de Logo y distintas versiones</p>
                                <p className="p-31">Rediseño de logo</p>
                                <p className="p-31">Adaptación para redes sociales</p>
                                <p className="p-31">Definición de paleta de colores</p>
                                <p className="p-31">Definición de tipografías</p>
                                <p className="p-31">Elementos gráficos o pattern</p>
                                <p className="p-31">Manual de identidad</p>
                                <p className="p-31">Diseño completo de merchandising</p>
                                <p className="p-31">Packaging</p>
                                <p className="p-31">Diseño de brochure</p>
                            </div>
                            <div>
                                <p className="p-31">Diseño de menú para restaurante</p>
                                <p className="p-31">Diseño de postal</p>
                                <p className="p-31">Diseño de revista</p>
                                <p className="p-31">Ilustración vectorial</p>
                                <p className="p-31">Diseño de carpeta institucional</p>
                                <p className="p-31">Diseño de hojas membretadas</p>
                                <p className="p-31">Diseño de sobres</p>
                                <p className="p-31">Tarjeta de eventos</p>
                                <p className="p-31">Tarjetas personales</p>
                                <p className="p-31">Folleteria</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="fotografia--title servicios__title">
                        <h4 className="title-72 mb-1_66 absolute">Fotografía</h4>
                        <picture>
                            <source srcSet={fotografiaWebp}></source>
                            <img src={fotografia} alt='cámara'></img>
                        </picture>
                    </div>
                    <div className="shadow-box">
                        <div className="fotografia--div inner--shadow">
                            <p className="p-31">Fotografía de producto</p>
                            <p className="p-31">Fotografía publicitaria para redes sociales</p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="marketing-y-comunicacion" className="marketingYComunicacion">
                <h2 className="title title-90" data-aos="fade-up">Marketing Y Comunicación</h2>
                <h3 className="title-48" data-aos="fade-up">En los detalles está la diferencia. Más funcionalidad. Más impacto.</h3>
                <p className="marketingYComunicacion__description description p-31" data-aos="fade-up">La presencia de una marca en Facebook, Instagram, Twitter y todas las plataformas digitales sociales, logra un acercamiento directo. Crea historias y mantiene actualizadas a las empresas, facilitando el contacto real y un flujo de información permanente.</p>
                <div data-aos="fade-up">
                    <div className="marketingDigital--title servicios__title">
                        <picture>
                            <source srcSet={marketingDigitalWebp}></source>
                            <img src={marketingDigital} alt='marketing digital'></img>
                        </picture>
                        <h4 className="title-72 mb-2_22 absolute">Marketing Digital</h4>
                    </div>
                    <div className="shadow-box">
                        <div className="marketingDigital--div inner--shadow grid-1-row-2-cols">
                            <p className="grid1 mb-1_66 p-31">Estrategia de Marketing y Comunicación en redes sociales:</p>
                            <div className="grid2">
                                <p className="p-31">Diagnóstico.</p>
                                <p className="p-31">Objetivo Estratégico.</p>
                                <p className="p-31">Plan de ejecución.</p>
                                <p className="p-31">Reporting.</p>
                                <p className="p-31">Presupuesto.</p>
                            </div>
                            <div className="grid3">
                                <p className="p-31">Inboud Mkt.</p>
                                <p className="p-31">Growth Mkt.</p>
                                <p className="p-31">Email Marketing.</p>
                                <p className="p-31">SEO.</p>
                                <p className="p-31">Publicidad en plataformas Ads.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="marketingTradicional--title servicios__title">
                        <h4 className="title-72 mb-2_22 absolute">Marketing Tradicional</h4>
                        <picture>
                            <source srcSet={marketingTradicionalWebp}></source>
                            <img src={marketingTradicional} alt='marketing tradicional'></img>
                        </picture>
                    </div>
                    <div className="shadow-box">
                        <div className="marketingTradicional--div inner--shadow grid-1-row-2-cols">
                            <p className="grid1 mb-1_66 p-31">Plan integral de Marketing:</p>
                            <div className="grid2">
                                <p className="p-31">Planteo del OMEP.</p>
                                <p className="p-31">(Objetivo, metas,<br /> estrategias<br /> y Programa).</p>
                                <p className="p-31">Análisis de empresa<br /> (interna y externa).</p>
                                <p className="p-31">Análisis de la<br /> competencia.</p>
                            </div>
                            <div className="grid3">
                                <p className="p-31">Análisis de ventas.</p>
                                <p className="p-31">Análisis del sector.</p>
                                <p className="p-31">Investigación de Mercado.</p>
                                <p className="p-31">Problemáticas y síntomas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="gestion-de-redes-sociales" className="gestionDeRedesSociales">
                <h2 className="title title-90" data-aos="fade-up">Gestión De Redes Sociales</h2>
                <h3 className="title-48" data-aos="fade-up">El éxito está en interactuar mientras los otros sólo postean.</h3>
                <p className="gestionDeRedesSociales__description description p-31" data-aos="fade-up">La presencia de una marca no lo es todo, la interacción que tengas con tu comunidad te va a garantizar alcanzar tu objetivo. Un adecuado manejo de redes es igual de importante que el contenido que generes.</p>
                <div data-aos="fade-up">
                    <div className="communityManager--title servicios__title">
                        <picture>
                            <source srcSet={communityManagerWebp}></source>
                            <img src={communityManager} alt='community manager'></img>
                        </picture>
                        <h4 className="title-72 mb-1_66 absolute">Community Manager</h4>
                    </div>
                    <div className="shadow-box">
                        <div className="communityManager--div inner--shadow">
                            <p className="p-31">Planificación y creación de contenido</p>
                            <p className="p-31">Carga a redes sociales</p>
                            <p className="p-31">Reporting</p>
                            <p className="p-31">Monitoreo de comentarios e interacciones</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="gestionDeComunidades--title servicios__title">
                        <h4 className="title-72 mb-1_66 absolute">Gestión De Comunidades</h4>
                        <picture>
                            <source srcSet={gestionDeComunidadesWebp}></source>
                            <img src={gestionDeComunidades} alt='gestion de comunidades'></img>
                        </picture>
                    </div>
                    <div className="shadow-box">
                        <div className="gestionDeComunidades--div inner--shadow grid-2-cols">
                            <div>
                                <p className="p-31">Administración de redes sociales</p>
                                <p className="p-31">Respuestas de bandejas de entradas</p>
                                <p className="p-31">Administración de página web</p>
                                <p className="p-31">Configuración de chat bots</p>
                            </div>
                            <div>
                                <p className="p-31">Administración de campañas publicitarias</p>
                                <p className="p-31">Configuración de Whatsapp Business</p>
                                <p className="p-31">Creación y optimización de redes</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="publicidadDigital--title servicios__title">
                        <h4 className="title-72 mb-1_66 absolute">Publicidad Digital</h4>
                        <picture>
                            <source srcSet={publicidadDigitalWebp}></source>
                            <img src={publicidadDigital} alt='publicidad digital'></img>
                        </picture>
                    </div>
                    <div className="shadow-box">
                        <div className="publicidadDigital--div inner--shadow">
                            <p className="p-31">Creacion, ejecución y monitoreo de pauta publicitaria en plataformas Ads</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="desarrolloWeb--title servicios__title">
                        <h4 className="title title-90 absolute">Desarrollo Web</h4>
                        <picture>
                            <source srcSet={desarrolloWebWebp}></source>
                            <img src={desarrolloWeb} alt='desarrollo web'></img>
                        </picture>
                    </div>
                    <div className="shadow-box">
                        <div className="desarrolloWeb--div inner--shadow">
                            <p className="p-31">Sitios web.</p>
                            <p className="p-31">Tiendas virtuales.</p>
                            <p className="p-31">Landing pages.</p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up">
                    <div className="desarrolloUxUi--title servicios__title">
                        <picture>
                            <source srcSet={desarrolloUxUiWebp}></source>
                            <img src={desarrolloUxUi} alt='desarrollo ux y ui'></img>
                        </picture>
                        <h4 className="title title-90 absolute">Desarrollo Ux Y Ui</h4>
                    </div>
                    <div className="shadow-box">
                        <div className="desarrolloUxUi--div inner--shadow">
                            <p className="mb-1_66 p-31">Diseño y mejora de experiencia de usuarios en:</p>
                            <p className="p-31">Sitio Web</p>
                            <p className="p-31">Tiendas e-commerce</p>
                            <p className="p-31">Aplicaciones</p>
                            <p className="p-31">Creación de interfaces.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Servicios;