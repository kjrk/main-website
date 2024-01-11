import "./App.css";
import "./css/social-media.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiVisualstudiocode,
  SiPython,
  SiBlender,
  SiObsidian,
} from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function App() {
  const RotatingCircle = () => {
    return (
      <div className="rotating-circle">
        <div className="icon icon1">
          <div className="rotate-anticlockwise">
            <SiAdobephotoshop title="Adobe Photoshop" />
          </div>
        </div>
        <div className="icon icon2">
          <div className="rotate-anticlockwise">
            <SiAdobeaftereffects title="Adobe After Effects" />
          </div>
        </div>
        <div className="icon icon3">
          <div className="rotate-anticlockwise">
            <SiVisualstudiocode title="Visual Studio Code" />
          </div>
        </div>
        <div className="icon icon4">
          <div className="rotate-anticlockwise">
            <SiPython title="Python" />
          </div>
        </div>
        <div className="icon icon5">
          <div className="rotate-anticlockwise">
            <SiBlender title="Blender" />
          </div>
        </div>
        <div className="icon icon6">
          <div className="rotate-anticlockwise">
            <SiObsidian title="Obsidian" />
          </div>
        </div>
        <div className="icon icon7">
          <div className="rotate-anticlockwise">
            <FaGithub title="GitHub" />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 2,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {/*   <img src={logo} className="App-logo" alt="logo" />
           */}
          <RotatingCircle />
          <div style={{ marginTop: "100px" }}>
            <p>Hello there</p>
          </div>

          <div
            style={{
              display: "flex",
              direction: "row",
              gap: "20px",
              justifyContent: "center",
            }}
          >
            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <a href="https://www.youtube.com/" className="youtube social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
            </motion.div>
            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <a href="https://www.facebook.com/" className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: [null, 1.5, 1.4] }}
              transition={{ duration: 0.3 }}
            >
              <a href="https://www.instagram.com/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </header>
    </div>
  );
}

export default App;
