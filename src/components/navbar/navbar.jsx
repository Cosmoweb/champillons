import React from 'react';
import { motion } from 'framer-motion';
import './navbar.css';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import logo from '../../assets/champillons_logo_head.png';

const navbar = () => {
  return (
    <div id="top">
      <motion.div
        className="champ__logo"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.5,
        }}
      >
        <img src={logo} alt="logo" />
      </motion.div>
      <div className="champ__social-header">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
          }}
        >
          <a
            href="https://twitter.com/Champillons"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter />
          </a>
          <FaDiscord />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: -6 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
        >
          <a href="" className="champ_btn mint_btn">
            MINT
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default navbar;
