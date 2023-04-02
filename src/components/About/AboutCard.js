import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Akash Kathole </span>
            from <span className="purple"> Pune, India.</span>
            <br />I am pursuing a degree in B.Tech with a specialization in Artificial Intelligence.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />  Love reading AI Trends
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Data has better idea💡! "{" "}
          </p>
          <footer className="blockquote-footer">Akash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
