import React from "react";
import ContactAdress from "./contactadress/ContactAdress";
import ContactForm from "./contactForm/ContactForm";


const Contact = () => {
  return (
    <>
<section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <span>Contact</span>
          <h2>Contact</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

          <div className="col-lg-5 d-flex align-items-stretch">
      <ContactAdress/>

          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
         <ContactForm/>
          </div>

        </div>

      </div>
    </section>
    </>
  );
};
export default Contact;
