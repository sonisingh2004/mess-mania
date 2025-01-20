'use client';
import { motion, useAnimationControls } from 'framer-motion';
import React from 'react';

const AnimatedText = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const textControls = useAnimationControls();
  const cursorControls = useAnimationControls();

  React.useEffect(() => {
    const animate = async () => {
      await textControls.start({
        width: '100%',
        transition: { duration: 2, repeat: Infinity },
      });
      cursorControls.start({
        opacity: [1, 0],
        transition: { duration: 0.8, repeat: Infinity },
      });
    };
    animate();
  }, [textControls, cursorControls]);

  return (
    <div className="relative inline-flex items-center">
      <div className="relative">
        {/* Hidden full text for maintaining layout */}
        <span className={`invisible ${className}`}>{text}</span>

        {/* Animated reveal text */}
        <motion.div
          className="absolute top-0 left-0 overflow-hidden whitespace-nowrap"
          initial={{ width: '0%' }}
          animate={textControls}
        >
          <span className={className}>{text}</span>
        </motion.div>
      </div>

      {/* Animated cursor */}
      {/* <motion.div
        className="w-0.5 h-12 bg-black ml-1"
        initial={{ opacity: 1 }}
        animate={cursorControls}
      /> */}
    </div>
  );
};

export default AnimatedText;
