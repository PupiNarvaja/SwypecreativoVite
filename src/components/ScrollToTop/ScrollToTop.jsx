import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  const scrollToSection = (section) => {
    window.scrollBy({
      top: (section.offsetTop - 100),
      behavior: "smooth",
    })
  };

  useEffect(() => {
    window.scrollTo(0, 0);
      setTimeout(() => {
        const CREATIVIDAD_Y_DISENO = document.getElementById("creatividad-y-diseno");
        const MARKETING_Y_COMUNICACION = document.getElementById("marketing-y-comunicacion");
        const GESTION_DE_REDES = document.getElementById("gestion-de-redes-sociales");

        window.location.href.indexOf("#creatividad") > -1
          ? scrollToSection(CREATIVIDAD_Y_DISENO)
          : window.location.href.indexOf("#marketing") > -1
          ? scrollToSection(MARKETING_Y_COMUNICACION)
          : window.location.href.indexOf("#gestion") > -1
          ? scrollToSection(GESTION_DE_REDES)
          : window.scrollTo(0, 0);
      }, 400);
    }, [pathname]);

    return null;
};

export default ScrollToTop;