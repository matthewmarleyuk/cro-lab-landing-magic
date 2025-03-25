
import { useEffect, useState, useRef } from 'react';

// Fade in animation on scroll
export const useFadeIn = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return { ref, isVisible };
};

// Staggered animation for multiple elements
export const useStaggeredAnimation = (items: any[], delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initialVisibility = items.map(() => false);
    setVisibleItems(initialVisibility);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let timer: ReturnType<typeof setTimeout>;
          items.forEach((_, index) => {
            timer = setTimeout(() => {
              setVisibleItems((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * delay);
          });

          if (containerRef.current) {
            observer.unobserve(containerRef.current);
          }

          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [items.length, delay]);

  return { containerRef, visibleItems };
};

// Parallax effect
export const useParallax = (speed = 0.5) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      ref.current.style.transform = `translateY(${scrollY * speed}px)`;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return ref;
};
