import React, { useState } from "react";
import "./profile.css";
import { Link } from "react-scroll";

import msd from "../../assets/msd.jpeg";
import jassi from "../../assets/jassi.jpeg";
import Virat from "../../assets/virat.jpeg";
import rohit from "../../assets/rohit.jpeg";

const Profiles = () => {
  const [setShowMenu] = useState(false);
  return (



    <section id="profile">
      <span className="ProfileTitle"> </span>
      <span className="profileDesc"> Legends.. Profiles </span>
      <div className="prolieBars">
        <div className="profileBar">
          <img src={msd} alt="Tony" className="profileBarImg" />
          <div className="profleBarText">
            <h2>M.S.Dhoni</h2>
            <p>
              "I am a skilled Recat Devloper inclued skills in Java, MySQL,
              Mongodb."
            </p>
          
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person1Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
           
          </div>
        </div>
        <div className="profileBar">
          <img src={Virat} alt="Captin" className="profileBarImg" />
          <div className="profileBarText">
            <h2>Virat Kohli</h2>
            <p>
              I am a experiend and skilled in Android Development with skills
              including Android, MySQL , Java, Web Designing..
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person2Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            
          </div>
        </div>
        <div className="profileBar">
          <img src={rohit} alt="Scarlett" className="profileBarImg" />
          <div className="profileBarText">
            <h2> Rohit Sharma</h2>
            <p>
              I am a experiend and skilled in Android Development with skills
              including Android, MySQL , Java, Web Designing..
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person3Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
           
          </div>
        </div>
        <div className="profileBar">
          <img src={jassi} alt="Thor" className="profileBarImg" />
          <div className="profileBarText">
            <h2> Jasprit Bumrah</h2>
            <p>
              I am a skilled Recat Devloper inclued skills in Java, MySQL,
              Mongodb.
            </p>
            <button
              className="desktopMenuBtn"
              onClick={() => {
                document
                  .getElementById("Person4Page")
                  .scrollIntoView({ behaviour: "smooth" });
              }}
            >
              Summary
            </button>
            
          </div>
        </div>
      </div>
    </section>
  );
};
export default Profiles;
