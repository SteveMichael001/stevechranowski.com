import { motion } from "motion/react";
import type { ReactNode } from "react";

/**
 * Scroll-reveal wrapper. Spring physics on the transform (per the motion
 * standard — no linear easing), a gentle tween on opacity so it never flickers.
 * Fires once when ~12% into view; reduced-motion is handled globally by the
 * <MotionConfig reducedMotion="user"> wrapper in Index.
 */
export const Reveal = ({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    transition={{
      y: { type: "spring", stiffness: 110, damping: 20, delay },
      opacity: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay },
    }}
  >
    {children}
  </motion.div>
);
