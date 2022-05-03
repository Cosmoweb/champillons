import React, { useState, useEffect } from 'react';
import './about.css';
import { motion } from 'framer-motion';
import Animation1 from '../../assets/animation-video1.mp4';
import Animation2 from '../../assets/animation-video2.mp4';
import Animation3 from '../../assets/animation-video3.mp4';
import Animation4 from '../../assets/animation-video4.mp4';

const videos = [Animation1, Animation2, Animation3, Animation4];

const about = () => {
  return (
    <>
      <section className="champ_section">
        <div className="champ__about champ_page_width">
          <motion.div
            className="champ__text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
              duration: 2.5,
            }}
          >
            <h2> Vision and the Champillons </h2>
            <p>
              Vision starts with values. Our core values reflect us, values that
              will allow us to prosper in Web3, together.<br></br>
              <br></br>Humility &gt; Hype <br></br>Quality &gt; Quantity
              <br></br> Health &gt; Wealth
              <br></br>
              <br></br>
              Our core vision and values are guided by the creation of our
              brand, refined by our culture. These values will never, ever
              change and drives our core. Curated art. Both a digital identity
              and a unique collectible. The theme of interconnectedness is one
              in which I strongly believe in. Interconnectedness in community,
              interconnectedness in vision and interconnectedness in media.
            </p>
          </motion.div>
          <div className="champ__animations">
            <div className="champ__animations-cont">
              <div className="champ_animation_item">
                {videos.map((videos, i) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                      duration: 0.8,
                      type: 'tween',
                      delay: i * 0.11,
                    }}
                    className="champ_animation_image"
                    key={videos + i}
                  >
                    <video src={videos} autoPlay loop muted />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="white-bg"></div> */}
      </section>
    </>
  );
};

export default about;
