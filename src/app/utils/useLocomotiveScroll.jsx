import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import "../../../node_modules/locomotive-scroll/dist/locomotive-scroll.esm"

const useLocomotiveScroll = (options) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollRef.current,
        ...options,
      });

      return () => {
        if (scroll) scroll.destroy();
      };
    }
  }, [options]);

  return scrollRef;
};

export default useLocomotiveScroll;
