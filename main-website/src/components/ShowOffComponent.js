import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./ShowOffComponent.scss";
import "../pages/MainPage.scss";

const items = [
  {
    id: 1,
    title: "PROJECT JARVIS",
    img: "",
    description:
      "desc desc desc descdesc descdesc descdesc descdesc descdesc descdesc descdesc descdesc desc desc desc",
    button: "See More Software",
  },
  {
    id: 2,
    title: "AMBITIOUS ROUTINE",
    img: "",
    description:
      "desc desc desc descdesc descdesc descdesc descdesc descdesc descdesc descdesc descdesc desc desc desc",
    button: "See More Magic",
  },
  {
    id: 3,
    title: "BACK FLIP",
    img: "",
    description:
      "desc desc desc descdesc descdesc descdesc descdesc descdesc descdesc descdesc descdesc desc desc desc",
    button: "See More Physical Skills",
  },
  {
    id: 4,
    title: "MENTAL PALACE",
    img: "",
    description:
      "desc desc desc descdesc descdesc descdesc descdesc descdesc descdesc descdesc descdesc desc desc desc",
    button: "See More Mental Skills",
  },
  {
    id: 5,
    title: "RUSH E",
    img: "",
    description:
      "desc desc desc descdesc descdesc descdesc descdesc descdesc descdesc descdesc descdesc desc desc desc",
    button: "See More Music",
  },
];

const Single = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref /* 
    offset: ["start start", "end start"], */,
  });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            <img src={item.img} alt="" />
          </div>

          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
const ShowOffComponent = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="show-off" ref={ref}>
      <div className="progress">
        <h1>PROJECTS</h1>
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShowOffComponent;
