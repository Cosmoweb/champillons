import React from 'react';
import './footer.css';
import twitter from '../../assets/icon_twitter.png';
import discord from '../../assets/icon_discord.png';
import opensea from '../../assets/icon_opensea.png';
import footer_logo from '../../assets/champillons-logo-footer.png';

const footer = () => {
  return (
    <>
      <section className="champ_section champ__footer ">
        <div className="champ_page_width footer_wrapper">
          <div className="champ__footer-icons">
            <a href="https://twitter.com/Champillons" target="_blank">
              <img src={twitter} alt="Twitter Logo" />
            </a>
            <img src={discord} alt="Discord Logo" />
            <img src={opensea} alt="Opensea Logo" />
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
          © 2022 Champillons | Terms & conditions | Website by{' '}
          <a href="https://twitter.com/webmonkeyy" target="_blank">
            Webmonkeyy
          </a>
        </p>
      </div>
    </>
  );
};

export default footer;
