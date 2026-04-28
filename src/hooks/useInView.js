import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible].
 * Attach `ref` to the element you want to observe.
 * `isVisible` becomes true once the element enters the viewport
 * and stays true (one-shot trigger for enter animations).
 *
 * @param {number} threshold  - IntersectionObserver threshold (0–1)
 */
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // one-shot
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}