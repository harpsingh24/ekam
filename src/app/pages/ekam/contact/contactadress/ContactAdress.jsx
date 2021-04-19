import React from "react";
import AdressData from "./AdressData";
const ContactAdress = () => {
  return (
    <>
           <div className="info">
              <div className="address">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
                <h4>Location:</h4>
                <p>{AdressData.location}</p>
              </div>

              <div className="email">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <h4>Email:</h4>
                <p>{AdressData.email}</p>
              </div>

              <div className="phone">
              <i class="fa fa-phone" aria-hidden="true"></i>
                <h4>Call:</h4>
                <p>{AdressData.phonenumber}</p>
              </div>

              <iframe src={AdressData.googlelocation} frameborder="0" style={{border:'0', width: '100%', height: '290px', }} allowfullscreen></iframe>
            </div>
    </>
  );
};
export default ContactAdress;
