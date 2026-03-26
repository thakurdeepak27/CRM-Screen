import { useEffect, useState } from "react";

export const useVisibility = (ref, options = {}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
        ...options,
      },
    );

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return isVisible;
};
