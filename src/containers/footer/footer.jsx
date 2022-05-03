import React from 'react';
import './footer.css';
import { FaTwitter, FaDiscord, FaInstagram } from 'react-icons/fa';
import footer_logo from '../../assets/champillons-logo-footer.png';

const footer = () => {
  return (
    <>
      <section className="champ_section champ__footer ">
        <div className="champ_page_width footer_wrapper">
          <div className="champ__footer-icons">
            <a
              href="https://twitter.com/Champillons"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter />
            </a>

            <a
              href="https://instagram.com/pivboi_3d"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </div>
          <div className="champ__footer-logo">
            <a href="#top">
              <img src={footer_logo} alt="Champillons Footer Logo" />
            </a>
          </div>
        </div>
      </section>
      <div className="champ__footer-bar">
        <p>
          {' '}
          © 2022 Champillons | Website by{' '}
          <a
            href="https://twitter.com/webmonkeyy"
            target="_blank"
            rel="noreferrer"
          >
            Webmonkeyy
          </a>
        </p>
      </div>
    </>
  );
};

export default footer;
