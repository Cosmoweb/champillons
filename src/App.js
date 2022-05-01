import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { About, Faq, Footer, Header, Team } from './containers';
import { Navbar } from './components';
import './App.css';

function App() {
  const [faqs, setfaqs] = useState([
    {
      question: "What's your supply?",
      answer: '5555 ',
      open: false,
    },
    {
      question: "What's your mint cost?",
      answer: '0.04',
      open: false,
    },
    {
      question: "What's the mint date?",
      answer: 'TBA',
      open: false,
    },
    {
      question: 'Is the whole collection animated?',
      answer:
        'The legendary 1/1 Champillons will be animated. The remaining will be still NFTs ',
      open: false,
    },
    {
      question: 'What contract will you be using?',
      answer: 'A gas optimised contract ',
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="App">
      <div className="header__section">
        <Navbar />
        <Header />
      </div>
      <About />
      <section className="champ_section">
        <div className="faqs_header champ_page_width">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
            }}
          >
            <h2>FAQS</h2>
          </motion.div>
        </div>
        <div className="faqs champ_page_width">
          {faqs.map((faq, i) => (
            <Faq faq={faq} index={i} toggleFAQ={toggleFAQ} />
          ))}
        </div>
      </section>
      <Team />
      <Footer />
    </div>
  );
}

export default App;
