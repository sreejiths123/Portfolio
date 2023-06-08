import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sreejith Sreedharan Nair </span>
            from <span className="purple"> Kerala, India.</span>
            <br />I did my Btech in Computer Science from Sree Narayana Gurukulam College of Engineering , Ernakulam , Kerala
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Spiritual & Self Help Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Yoga and Astrology
            </li>
            <li className="about-activity">
              <ImPointRight /> Farming
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sreejith S</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
