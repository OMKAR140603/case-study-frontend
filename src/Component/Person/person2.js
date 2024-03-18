import React from "react";
//import Profiles from "./Profiles/profile";
import virat from "../../assets/virat.jpeg";

function Person2() {
  return (
    <div id="Person2Page">
      <div className="personBar">
        <img src={virat} alt="Captin" className="profileBarImg" />
        <div className="personBarText">
          <h2>Name: virat kohli</h2>
          <h1>Experience: 3</h1>
          <h2>Intrest: Sketches, Spotrts, Singing</h2>
          <h2> Location:Harvard University</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.5025011327457!2d-71.12286222197021!3d42.374440670537965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377427d7f0199%3A0x5937c65cee2427f0!2sHarvard%20University!5e0!3m2!1sen!2sin!4v1695563699343!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: "0 " }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Person2;
