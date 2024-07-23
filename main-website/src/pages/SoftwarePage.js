import React from "react";

import { motion as m } from "framer-motion";
export const SoftwarePage = () => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      SoftwarePage
    </m.div>
    //create a function that prints Hello max
  );
};
