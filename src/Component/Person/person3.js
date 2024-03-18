import React from "react";
//import Profiles from "./Profiles/profile";
import rohit from "../../assets/rohit.jpeg";
function Person3() {
  return (
    <div id="Person3Page">
      <div className="personBar">
        <img src={rohit} alt="Scarlett" className="profileBarImg" />
        <div className="personBarText">
          <h2>Name: Rohit Sharma</h2>
          <h1>Experience: 2</h1>
          <h2>Intrest: Sprts, Music, Socializing</h2>
          <h2> Location: Google Cambridge</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0506386350094!2d-71.09172802197426!3d42.36276007127845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e370af46eaaaab%3A0x4814d6b609b380ad!2sGoogle%20Cambridge!5e0!3m2!1sen!2sin!4v1695563805118!5m2!1sen!2sin"
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
export default Person3;
