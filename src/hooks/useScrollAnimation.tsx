import { useEffect, useRef, useState } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(options.threshold === 0 || (options.rootMargin && options.rootMargin.includes('100%')));
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.triggerOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!options.triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.triggerOnce]);

  return { ref, isVisible };
};

// Custom hook for staggered animations
export const useStaggeredAnimation = (delay: number = 100) => {
  const [animatedItems, setAnimatedItems] = useState<Set<number>>(new Set());
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible } = useScrollAnimation({ triggerOnce: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const elements = ref.current?.children;
          if (elements) {
            Array.from(elements).forEach((_, index) => {
              setTimeout(() => {
                setAnimatedItems(prev => new Set([...prev, index]));
              }, index * delay);
            });
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return { ref, animatedItems, isVisible };
};