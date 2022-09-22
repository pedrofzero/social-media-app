import { useEffect, useState } from "react";

interface Size {
    width: number | undefined;
  }

export function useWindowSize(): Size {

    const [windowSize, setWindowSize] = useState<Size>({
      width: undefined,
    });
    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        setWindowSize({
          width: window.innerWidth,
        });
      }

      window.addEventListener("resize", handleResize);
      handleResize();

      return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
  }