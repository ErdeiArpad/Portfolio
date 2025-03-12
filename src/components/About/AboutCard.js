import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Erdei Arpad </span>
            from <span className="purple"> Edenvale, United States.</span>
            <br />
            I am currently employed as a software developer at SummitTech Innovations.
            <br />
            I have completed project about Custom AI-Powered Chatbot for Customer Support and 
            E-Commerce Platform with Real-Time Inventory Management
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Music or Art
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Technical Blogs or Tutorials
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring AI and Machine Learning
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Erdei Arpad</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
