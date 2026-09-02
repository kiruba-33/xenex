import React from 'react';
import ContactHero from "./sections/ContactHero/ContactHero";
import ContactInfo from "./sections/ContactInfo/ContactInfo";
import ContactForm from "./sections/ContactForm/ContactForm";
import Location from "./sections/Location/Location";

const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <Location />
    </>
  );
};

export default Contact;
