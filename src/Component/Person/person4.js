import React from "react";
//import Profiles from "./Profiles/profile";
import jassi from "../../assets/jassi.jpeg";

function Person4() {
  return (
    <div id="Person4Page">
      <div className="personBar">
        <img src={jassi} alt="Thor" className="profileBarImg" />
        <div className="personBarText">
          <h2>Name: Jasprit Bumrah</h2>
          <h1>Experience: 3</h1>
          <h2>Intrest: Painting, Singing, Reading Books</h2>
          <h2> Location: Byron Bay </h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56022.86582664!2d153.56164997541796!3d-28.6468673914924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9062852d3e762b%3A0x40609b49043f2d0!2sByron%20Bay%20NSW%202481%2C%20Australia!5e0!3m2!1sen!2sin!4v1695564031589!5m2!1sen!2sin"
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
export default Person4;
