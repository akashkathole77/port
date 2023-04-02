import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a data scientist with extensive technical expertise in various platforms and technologies, including Cloud, Analytics platform, Business Analytics, Machine Learning, Deep Learning, cloud computing, web deployment, and MLOps. I aim to leverage my skill set to develop efficient and effective data solutions that drive business value. … 🤷‍♂️
              <br />
              <br />my technical expertise in various platforms and technologies such as 
              <i>
                <b className="purple"> MLOps, Machine Learning, Deep Learning, Analytics platform, Business Analytics,  cloud computing, web deployment, and Cloud. </b>
              </i>
              <br />
              <br />
              But let's not forget the most important thing – I love what I do! You might catch me nerding out about the latest data science techniques or experimenting with new technologies in my free time. Don't be surprised if you hear me cracking jokes about AI taking over the world, though – I like to keep things lighthearted.

 &nbsp;
             
              <br />
              <br />
              Ultimately, my goal is to develop efficient and effective data solutions that make a real impact. So whether you're a business looking to streamline operations or a fellow data enthusiast, let's collaborate and create something amazing together!. 
              &nbsp; 
              <i>
                <b className="purple">.</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/akashkathole7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/akashkathole74/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-kathole/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.youtube.com/channel/UCead4mOe2wXcjdo7_VaM6cg"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillYoutube />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
