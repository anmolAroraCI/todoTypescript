import  { useState } from "react";
import "./Card.css";
import {  motion } from "framer-motion";
const Card = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card-outer">
      <motion.div
        transition={{ layout: { duration: 0.75, type: "spring" } }}
        layout
        className="card"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          borderRadius: "1rem",
          boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
        }}
      >
        <motion.h3 layout="position">Framer Motion Title</motion.h3>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="expand"
              transition={{ duration: 1 }}
            //   exit={{opacity:0}}
            //   layout
            >
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Molestias hic sed sint, officia blanditiis eligendi accusantium
                possimus earum nisi vel.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                eligendi.
              </p>
            </motion.div>
          )}
      </motion.div>
    </div>
  );
};

export default Card;
