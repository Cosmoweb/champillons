import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

import './team.css';
import teambg from '../../assets/team-bg.jpeg';

const team = () => {
  return (
    <div className="cham__team">
      {/* <img src={teambg} alt="Team Background" /> */}

      <a href="https://linktr.ee/champillons">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.4,
            delay: 0.4,
          }}
          className="champ_btn team_btn"
        >
          OUR TEAM
        </motion.div>
      </a>
    </div>
  );
};

export default team;
