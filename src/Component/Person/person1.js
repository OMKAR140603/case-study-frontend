import React from "react";
// import Profiles from "./Profiles/profile";
import msd from "../../assets/msd.jpeg";
import "./person.css";

function Person1() {
  return (
    <div id="Person1Page">
      <div className="personBar">
        <img src={msd} alt="Tony" className="profileBarImg" />
        <div className="personBarText">
          <h2>Name: M.S.Dhoni</h2>
          
          <h2>Intrest: Painting, Spotrts, Reading Books, Technology</h2>
          <h2> Location: Ranchi</h2>
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1586.1660891216409!2d-122.0112250555725!3d37.334643800000016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb596e9e188fd%3A0x3b0d8391510688f0!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sin!4v1695563386880!5m2!1sen!2sin"
  width="400"
  height="250"
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
export default Person1;
