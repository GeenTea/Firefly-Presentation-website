import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {backgroundImage?: string};

export default function AnimatedBackground({backgroundImage}: Props) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div className=" inset-0 overflow-hidden -z-10">
      {visible && backgroundImage &&(
        <motion.img
          src={backgroundImage}
          alt="Animated Background"
          className="absolute inset-0 w-full h-[80%] object-cover pointer-events-none select-none mask-b-from-20% mask-b-to-90%"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      )}
    </div>
  );
}