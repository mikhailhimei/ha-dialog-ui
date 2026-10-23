import { useEffect, useState } from "react";

export const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= breakpoint
  );

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handler = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches);
    };

    setIsMobile(media.matches);

    media.addEventListener("change", handler);

    return () => media.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
};