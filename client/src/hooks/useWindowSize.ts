import { useEffect, useState } from "react";

interface Size {
    width: number | undefined;
  }

export function useWindowSize(): number {

    const [windowSize, setWindowSize] = useState(window.innerWidth);
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        setWindowSize(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }