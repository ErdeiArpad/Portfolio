import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Collaborative_code_editor from "../../Assets/Projects/Collaborative_code_editor.jpg";
import SmartHome from "../../Assets/Projects/SmartHome-Automation-dashboard.jpg";
import Customer_support_chatbot from "../../Assets/Projects/Customer_support_chatbot.jpg";
import Ai_based_Ecommerce_web_app from "../../Assets/Projects/Ai_based_Ecommerce_web_app.jpg";
import AI_Fitness_trainer from "../../Assets/Projects/AI_Fitness_trainer.jpg";
import Portfolio_Builder from "../../Assets/Projects/Portfolio_Builder.jpg";

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
              imgPath={Ai_based_Ecommerce_web_app}
              isBlog={false}
              title="AI-Powered E-Commerce Platform"
              description="A full-stack e-commerce website integrated with AI for personalized product recommendations. Built with React, Node.js, and TensorFlow.js for real-time user behavior analysis."
              ghLink="https://github.com/ErdeiArpad/Ai-based-Ecommerce-web-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio_Builder}
              isBlog={false}
              title="Portfolio Website Builder"
              description="A dynamic website builder for creating personalized portfolios. Features drag-and-drop functionality, AI-driven design suggestions, and responsive templates. Developed using Vue.js and Flask."
              ghLink="https://github.com/ErdeiArpad/Portfolio-Builder"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Customer_support_chatbot}
              isBlog={false}
              title="AI Chatbot for Customer Support"
              description="A chatbot integrated into a website for automated customer support. Uses natural language processing (NLP) with OpenAI's GPT-4 and is deployed using Django and React."
              ghLink="https://github.com/ErdeiArpad/customer-support-chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Collaborative_code_editor}
              isBlog={false}
              title="Real-Time Collaborative Code Editor"
              description="A web-based code editor with real-time collaboration features. Built with WebSockets, React, and Node.js. Includes AI-powered code completion using Codex."
              ghLink="https://github.com/ErdeiArpad/Collaborative-code-editor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AI_Fitness_trainer}
              isBlog={false}
              title="AI-Driven Fitness Tracker"
              description="A fitness tracking web app that uses AI to analyze workout data and provide personalized recommendations. Built with Angular, Express, and Python for AI modeling."
              ghLink="https://github.com/ErdeiArpad/AI-Fitness-trainer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SmartHome}
              isBlog={false}
              title="Smart Home Automation Dashboard"
              description="A full-stack dashboard for controlling smart home devices. Integrates IoT APIs and AI for predictive automation. Developed with React, Node.js, and TensorFlow Lite."
              ghLink="https://github.com/ErdeiArpad/my-home-automation-dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
