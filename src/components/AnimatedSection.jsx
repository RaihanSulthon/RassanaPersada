// components/AnimatedSection.jsx
import { useInView } from "../hooks/useInView";

const TRANSFORMS = {
  up: "translateY(48px)",
  down: "translateY(-48px)",
  left: "translateX(-48px)",
  right: "translateX(48px)",
};

/**
 * Wraps children in a div that animates into view on scroll.
 *
 * @param {React.ReactNode} children
 * @param {string}  className   - extra Tailwind classes on the wrapper
 * @param {number}  delay       - transition-delay in seconds
 * @param {"up"|"down"|"left"|"right"} direction
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}) {
  const [ref, visible] = useInView();

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : TRANSFORMS[direction],
        transition: `opacity 0.75s ease ${delay}s, transform 0.75s ease ${delay}s`,
      }}>
      {children}
    </div>
  );
}
