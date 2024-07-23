import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
const AnimatedText = ({ text, el: Wrapper = "p", className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.8 });
  return (
    <Wrapper className={className}>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ staggerChildren: 0.02 }}
      >
        {isInView &&
          text.split("").map((char) => (
            <motion.span className="inline-block" variants={defaultAnimations}>
              {char}
            </motion.span>
          ))}
      </motion.span>
    </Wrapper>
  );
};

export default AnimatedText;
