import { useInView } from "../hooks/useInView";

// Each variant defines initial opacity and transform.
// "blur-up" also fades out a blur filter for a premium "focus-in" look.
const VARIANTS = {
  "fade-up":    { transform: "translateY(44px)",           filter: null        },
  "fade-down":  { transform: "translateY(-44px)",          filter: null        },
  "fade-left":  { transform: "translateX(-44px)",          filter: null        },
  "fade-right": { transform: "translateX(44px)",           filter: null        },
  "zoom-in":    { transform: "scale(0.9) translateY(16px)",filter: null        },
  "zoom":       { transform: "scale(0.85)",                filter: null        },
  "blur-up":    { transform: "translateY(24px)",           filter: "blur(8px)" },
  "fade":       { transform: null,                         filter: null        },
  // legacy direction aliases
  up:    { transform: "translateY(44px)",  filter: null },
  down:  { transform: "translateY(-44px)", filter: null },
  left:  { transform: "translateX(-44px)", filter: null },
  right: { transform: "translateX(44px)",  filter: null },
};

// Expo-out cubic-bezier: snappy start, soft landing — professional & satisfying
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/**
 * Wraps children and animates them into view on scroll.
 *
 * @param {string}  variant    - animation type (see VARIANTS above)
 * @param {string}  direction  - legacy alias for variant
 * @param {number}  delay      - stagger delay in seconds
 * @param {number}  duration   - transition duration in seconds
 * @param {string}  className  - extra Tailwind classes on the wrapper
 */
export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  duration = 0.75,
  variant,
  direction = "up",
}) {
  const [ref, visible] = useInView();
  const key = variant ?? direction;
  const { transform, filter } = VARIANTS[key] ?? VARIANTS["fade-up"];

  const transitions = [
    `opacity ${duration}s ${EASE} ${delay}s`,
    transform && `transform ${duration}s ${EASE} ${delay}s`,
    filter    && `filter ${duration}s ${EASE} ${delay}s`,
  ].filter(Boolean).join(", ");

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity:   visible ? 1 : 0,
        transform: visible ? "none" : (transform ?? "none"),
        filter:    visible ? "none" : (filter ?? "none"),
        transition: transitions,
      }}
    >
      {children}
    </div>
  );
}
