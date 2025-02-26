import React from "react";
import { motion } from "framer-motion";

const MarqueeItem = ({ images, from, to }) => {
  return (
    <div className="inline-flex">
      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-13 max-w-96 pr-30" src={image} key={index} />;
        })}
      </motion.div>

      <motion.div
        initial={{ x: `${from}` }}
        animate={{ x: `${to}` }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {images.map((image, index) => {
          return <img className="h-13 max-w-96 pr-30" src={image} key={index} />;
        })}
      </motion.div>
    </div>
  );
};

export default MarqueeItem;