import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./ShowOffComponent.scss";
import "../pages/MainPage.scss";
import AnimatedText from "./AnimatedText";
import { AdvancedVideo, lazyload } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { CloudinaryVideo } from "@cloudinary/url-gen";

const items = [
  {
    id: 1,
    title: "PROJECT JARVIS",
    img: "",
    description:
      "Project Jarvis is an AI designed to automate the home experience, whether it is managing finances, welcoming guests, acknowledging voice commands, or even looking up contextual information about Kelvin's life.",
    button: "See More Software",
  },
  {
    id: 2,
    title: "AMBITIOUS ROUTINE",
    img: "",
    description:
      "A card routine to show off aspects of sleight of hand and finger dexterity.",
    button: "See More Magic",
  },
  {
    id: 3,
    title: "BACK FLIP",
    img: "",
    description:
      "A physical acrobatic skill that is impressive to look at. Trains your mind to not fear the jump while simultanously unlocking the transfer of energy from toe to hand.",
    button: "See More Physical Skills",
  },
  {
    id: 4,
    title: "TAYLOR SWIFT",
    img: "",
    description:
      "A painting of the Taylor Swift's face. Focusing on shades, colour and strokes.",
    button: "See More Paintings",
  },
  {
    id: 5,
    title: "RUSH E",
    img: "",
    description:
      "A song many know and is seen as a hard song to master. The main focus is finger dexterity and hand to eye co-ordination.",
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

  const cld = new CloudinaryVideo({ cloud: { cloudName: "dczgscern" } });
  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="image-container" ref={ref}>
            {/* <img src={item.img} alt="" /> */}
            <div></div>
          </div>

          <motion.div className="text-container" style={{ y }}>
            <h2>{item.title}</h2>
            <p>
              <AnimatedText text={item.description} />
            </p>
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
        {/*   <h1>PROJECTS</h1> */}
        <motion.div style={{ scaleX }} className="progress-bar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShowOffComponent;
