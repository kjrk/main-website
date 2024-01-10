import logo from "./logo.svg";
import "./App.css";
import "./css/social-media.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 5,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <p>Welcome</p>
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
              <a href="https://www.twitter.com/" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
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
