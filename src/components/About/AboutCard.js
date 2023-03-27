import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saurabh Sarin </span>
            from <span className="purple"> Ranchi, India.</span>
            <br />I am As a civil engineer turned full stack developer, I bring a unique perspective to software development that is informed by my experiences in engineering. With a strong foundation in problem-solving and attention to detail, I have developed a passion for creating dynamic web applications that provide intuitive and efficient user experiences.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Snooker
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Boxing, Gym
            </li>
          </ul>

          <p style={{ color: "rgb(26,230,250)" }}>
            "Code with passion, build with precision and aim for practice over perfection"{" "}
          </p>
          <footer className="blockquote-footer">100RBH Sarin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
