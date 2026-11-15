import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace("#", "");
      const scrollTimer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
      return () => clearTimeout(scrollTimer);
    }
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [pathname, hash, key]);

  return null;
}

export default ScrollToTop;
