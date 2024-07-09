import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Hania Haroon </span>
            from <span className="purple"> Faisalabad, Pakistan.</span>
            <br />
            I am a fresh graduate in field of Computer Science. My journey is in Mobile App development has been dynamic, with a focus on the <span className="purple"> Flutter Development </span>, where I've led various projects Additionally, I've delved into App Development using, employing <span className="purple">Firebase</span> for database.
            {/* <br />
            I have completed Integrated MSc (IMSc) in Maths and Computing at BIT
            Mesra. */}
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring new Technologies
            </li>

            <li className="about-activity">
              <ImPointRight /> Learning new trends
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p> */}
          {/* <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
