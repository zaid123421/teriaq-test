import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function useScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window.scrollTo === "function") {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);
}
