import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import Tumor_Disease_prediction from "../../Assets/Projects/brain_tumor.png"
import review_scrapper from "../../Assets/Projects/review_scrapper.png"
import loan_prediction from "../../Assets/Projects/loan_prediction.png"
import resume from "../../Assets/Projects/resume.png"
import uber from "../../Assets/Projects/uber.png"
import digit from "../../Assets/Projects/digit.png"
import diabetis from "../../Assets/Projects/diabetis.png"
import wine from "../../Assets/Projects/wine.png"
import titanic from "../../Assets/Projects/titanic.png"
import stock from "../../Assets/Projects/stock.png"
import student from "../../Assets/Projects/student.png"
import mail from "../../Assets/Projects/mail.png"
import text1 from "../../Assets/Projects/text1.png"
import prank from "../../Assets/Projects/prank.png"
import sales from "../../Assets/Projects/sales.png"
import colorize from "../../Assets/Projects/colorize.png"
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Tumor_Disease_prediction}
              isBlog={false}
              title="Brain Tumor Prediction"
              description="Brain Tumor Prediction with Fun Welcome to our brain tumor prediction project! This project is designed to help users predict whether or not an MRI scan shows the presence of a brain tumor. But we've added some fun to it too! As you make your prediction, our system will generate a unique and silly GIF that corresponds to your prediction."
              ghLink="https://github.com/akashkathole7/Tumor_Disease_prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={review_scrapper}
              isBlog={false}
              title="Reviews Scraper"
              description="The Review Scraper project can be a powerful tool for businesses or individuals who want to monitor and analyze customer feedback from various online sources. By scraping reviews from different platforms, the project provides a vast amount of data that can be used for different purposes, such as improving products, services, or customer experience."
              ghLink="https://github.com/akashkathole7/Review_scrapper.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={colorize}
              isBlog={false}
              title="Colorize Image Converter"
              description="Welcome to the colorful world of Colorize Image Converter! This project is designed to add a little bit of fun and creativity to image processing. With machine learning algorithms and data analysis techniques, we can add vibrant colors to black and white images and bring them to life."
              ghLink="https://github.com/akashkathole7/Colorize-Image-Converter.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={loan_prediction}
              isBlog={false}
              title="Loan Prediction"
              description="This project aims to predict whether a loan application will be approved or not based on various factors, such as applicant information, loan amount, and credit history. The goal is to develop a model that can accurately predict loan approval or rejection, which can be helpful for banks or other financial institutions in their decision-making processes."
              ghLink="https://github.com/akashkathole7/loan_prediction.git"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="Digital Portfolio"
              description="This project is a digital resume portfolio that showcases a candidate's skills, experience, and achievements using a web-based interface built with Streamlit. The goal of the project is to create a dynamic and interactive platform that allows candidates to present their credentials to potential employers in a visually appealing and user-friendly way."
              ghLink="https://github.com/akashkathole7/digital-resume.git"
              demoLink="http://akashkathole.ml/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber Data Analysis"
              description="This project aims to analyze the Uber dataset and gain insights into ride patterns and trends in different regions. The dataset contains information on Uber rides in New York City from April to September 2014, including pickup and drop-off locations, dates, times, and other factors. The goal of the project is to use data analysis techniques to identify patterns and trends in ride data and provide useful insights for business and transportation planning."
              ghLink="https://github.com/akashkathole7/uber-data-analysis-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text1}
              isBlog={false}
              title="Text Summarization"
              description="Welcome to the world of fun text summarization! This repository contains code and resources related to generating amusing and entertaining summaries of longer texts. With natural language processing techniques and machine learning algorithms"
              ghLink="https://github.com/akashkathole7/Text_Summarisation.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prank}
              isBlog={false}
              title="Prankinsons Prediction"
              description="Prankinsons Prediction is a project that uses machine learning algorithms and data analysis techniques to predict and prevent pranks from your mischievous friends. The project provides a fun and creative starting point for individuals interested in developing or implementing their own Prankinsons Prediction models.

              "
              ghLink="https://github.com/akashkathole7/prankinsons-disease-prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Sucide Detection"
              description="Suicide is a major public health concern, and predicting suicide risk is crucial for prevention efforts. Machine learning algorithms can be used to analyze various risk factors and predict the likelihood of suicide attempts. This project provides code and resources for individuals interested in developing or implementing suicide prediction models. The project includes several publicly available datasets, code examples written in Python, and a list of resources related to suicide prevention and machine learning."
              ghLink="https://github.com/akashkathole7/Sucide_prediction.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digit}
              isBlog={false}
              title="Hand Written Recognizer"
              description="Handwritten Recognition This project is a handwritten recognition system that uses machine learning algorithms to recognize handwritten text. The system is built using Python programming language and utilizes the scikit-learn machine learning library."
              ghLink="https://github.com/akashkathole7/Hand_written_recognizer.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diabetis}
              isBlog={false}
              title="Diabetis Prediction web app"
              description="Diabetes Prediction This project is a diabetes prediction system that uses machine learning algorithms to predict the likelihood of a person developing diabetes based on various health parameters. The system is built using Python programming language and utilizes the scikit-learn machine learning library."
              ghLink="https://github.com/akashkathole7/Diabetis-Prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wine}
              isBlog={false}
              title="Wine Quality Prediction"
              description="Wine Quality Prediction This project is a wine quality prediction system that uses machine learning algorithms to predict the quality of wines based on various chemical properties. The system is built using Python programming language and utilizes the scikit-learn machine learning library"
              ghLink="https://github.com/akashkathole7/Wine_quality_prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={titanic}
              isBlog={false}
              title="Titanic Survived Prediction"
              description="In this project, I will use machine learning algorithms to predict the survival of passengers aboard the Titanic based on various features. Our goal is to build a system that can accurately predict whether a passenger survived or not based on their age, sex, ticket class, and other features."
              ghLink="https://github.com/akashkathole7/Titanic_survived_prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              isBlog={false}
              title="Stock Prediction on TataMotors"
              description="
              Welcome to the Tata Motors Stock Prediction Project! carchart_with_upwards_trend
              
              In this project, I will be using the power of machine learning to predict the future stock prices of Tata Motors. But first, let's make sure we have everything we need to get started."
              ghLink="https://github.com/akashkathole7/stock_predicion-tatamotors-.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={student}
              isBlog={false}
              title="Student Performance Analysis"
              description="In this project, I will be using machine learning algorithms to predict the performance of students based on various factors such as their attendance, study time, and parental education level. Our goal is to build a system that can accurately predict the grades of students and help educators identify students who may need additional support."
              ghLink="https://github.com/akashkathole7/student_performance.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="BigMart Sales Prediction"
              description="Welcome to the world of BigMart Sales Prediction! This repository contains code and resources related to predicting the sales of items sold at BigMart stores. With machine learning algorithms and data analysis techniques, we can forecast future sales of various products and identify key factors that contribute to higher sales."
              ghLink="https://github.com/akashkathole7/bigmart_sales_prediction.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mail}
              isBlog={false}
              title="Spam Mail Prediction"
              description="I will be using machine learning algorithms to detect spam emails. Our goal is to build a system that can accurately distinguish between legitimate emails and spam emails and help users to filter out unwanted messages.

              "
              ghLink="https://github.com/akashkathole7/spam_mail_detection.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Speech Emotion Recognition"
              description="This project aims to recognize the emotional state of a person based on their speech using machine learning techniques. The goal is to develop a model that can accurately classify speech into different emotional categories, such as happy, sad, angry, and neutral. The application of this technology can be used in a wide range of domains, including healthcare, education, entertainment, and customer service."
              ghLink="https://github.com/akashkathole7/speech_emotion_recogn.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
