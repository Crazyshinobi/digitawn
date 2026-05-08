import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 to `target` over `duration` ms using easeOutExpo.
 * Only starts when `active` becomes true (one-shot).
 *
 * @param {number}  target   - The final numeric value
 * @param {number}  duration - Animation duration in ms (default 1800)
 * @param {boolean} active   - Trigger flag (start when true)
 * @returns {number} current animated value (integer)
 */
export default function useCounter(target, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    // easeOutExpo
    const ease = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

    const animate = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.round(ease(progress) * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [active, target, duration]);

  return count;
}
