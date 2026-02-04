import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window.history.scrollRestoration !== "undefined") {
      window.history.scrollRestoration = "manual";
    }

    const scroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.documentElement.scrollLeft = 0;
      document.body.scrollTop = 0;
      document.body.scrollLeft = 0;
      const main = document.getElementById("main-content");
      if (main && main.scrollTop !== undefined) {
        main.scrollTop = 0;
        main.scrollLeft = 0;
      }
    };

    scroll();
    const timeoutId = setTimeout(scroll, 0);
    const timeoutId2 = setTimeout(scroll, 100);

    return () => {
      clearTimeout(timeoutId);
      clearTimeout(timeoutId2);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
