import React from "react";
import { motion } from "framer-motion";
import { textVariants, buttonVariants } from "../utils/motionVariants";
import Header from "../components/pages/Header";
import AnimatedWrapper from "../components/anim/AnimatedWrapper";
import "../styles/Home.css";
import About from "../components/pages/About";
import { useNavigate } from "react-router-dom";
import Contact from "../components/pages/Contact";
import Plans from "../components/pages/Plans";
import Footer from "../components/pages/Footer";
function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <AnimatedWrapper>
        <Header />
        <div className="container">
          <div className="home-container">
            <motion.h1 variants={textVariants} initial="hidden" animate="visible" transition={{ duration: 0.8 }}>
              Simplify bill splitting <br />
              with ease.
            </motion.h1>

            <div className="below-head">
              <motion.p
                variants={textVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 1, delay: 0.3 }}
              >
                Easily divide expenses with friends, family, or roommates. <br />
                No more awkward calculations—just fair and effortless payments.
              </motion.p>

              <motion.button
                className="btn"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: 0.6 }}
                onClick={() => navigate("/register")}
              >
                Get Started
              </motion.button>
            </div>
          </div>

          <section id="about">
            <About />
          </section>

          <section id="plans">
            <Plans />
          </section>
          <section id="contact">
            <Contact />
          </section>
          <section id="footer">
            <Footer />
          </section>
        </div>
      </AnimatedWrapper>
    </div>
  );
}

export default Home;
