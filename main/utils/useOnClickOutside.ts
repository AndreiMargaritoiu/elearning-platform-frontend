import { useEffect } from 'react';

export const useOnClickOutside = (ref: any, handler: any, exclude: any) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (exclude && exclude.current && exclude.current.contains(event.target))
      ) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchend', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);
};
