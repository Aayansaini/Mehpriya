import React from "react";
import { Cards } from "./Cards";
import "../About-us/About.css";
export function About() {
  return (
    <>
      <div className="section Section-b1">
        <div className="container Container-b2">
          <div className="row Row-b2">
            <div className="col-sm-12 col-b2">
              <div className="about-sec">
                <h1>About us</h1>
                <p>
                  Are you ready to upgrade your style? Look no further than
                  Mehpriya, an online fashion destination that <br /> brings the
                  latest trends and <br /> exclusive designer straight <br /> to
                  your door!
                </p>
              </div>
            </div>
            <div className="col-12 col-b2-2">
              <li>
                <a>Who we are</a>
              </li>
              <li>
                <a>Our senior staff</a>
              </li>
              <li>
                <a>Our work</a>
              </li>
              <li>
                <a>Working at Mehpriya</a>
              </li>
              <li>
                <a>Get in touch</a>
              </li>
            </div>
          </div>
          <div className="Box-Slider-Heading">
            <p>WHO WE ARE</p>
          </div>
          <div className="cont-b2-2">
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}
