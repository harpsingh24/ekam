import React from "react";
 
import TeamData from "./TeamData";

const Team = () => {
  return (
    <>
   <section id="team" className="team section-bg">
      <div className="container">

        <div className="section-title">
          <span>Team</span>
          <h2>Team</h2>
          <p>Sit sint consectetur velit quisquam cupiditate impedit suscipit alias</p>
        </div>

        <div className="row">

{TeamData.map((data,i)=>{

return(
  <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
  <div className="member">
    <img src={TeamData[i].img} alt={TeamData[i].fname}/>
    <h4>{TeamData[i].fname} </h4>
    <span>{TeamData[i].jobprofile}</span>
    <p>
    {TeamData[i].description}
    
    </p>
    <div className="social">
      <a href={TeamData[i].twiterLink}> <i className="fa fa-twitter"></i> </a>
      <a href={TeamData[i].fbLink}> <i className="fa fa-facebook"></i> </a>
      <a href={TeamData[i].instagramLink}> <i className="fa fa-instagram"></i> </a>
      <a href={TeamData[i].linkdinlink}> <i className="fa fa-linkedin"></i> </a>


    </div>
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
export default Team;
