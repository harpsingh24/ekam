import React from "react";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
   <section id="services" className="services section-bg">
      <div className="container">

        <div className="section-title">
          <span>Services</span>
          <h2>Services</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">


{ServicesData.map((data,i)=>{
 
   return(
    <div className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4">
    <div className="icon-box">
      <div className="icon"><i class={ServicesData[i].icon + ' fa'} aria-hidden="true"></i></div>
      <h4> {ServicesData[i].heading}</h4>
      <p> {ServicesData[i].pehra} </p>
    </div>
  </div>
   )
 


})}

    </div>

      </div>
    </section>
    </>
  );
};
export default Services;
