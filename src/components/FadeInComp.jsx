import React from "react";
import { motion } from "framer-motion";

const FadeInComp = ({ children }) => {
    const fadeInVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInVariants}
            transition={{ duration: 1.5 }}
        >
            {children}
        </motion.div>
    );
};

export default FadeInComp;
