import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

const projects = [
  {
    title: 'AI-Powered Job Recommendation Platform (Backend)',
    description: 'A MERN stack backend using OpenAI API for intelligent job recommendations and application management.',
    link: 'https://github.com/DevSrilatha/AI-Powered-Job-Recommendation-Platform-Backend',
  },
  {
    title: 'Tic Tac Toe Game',
    description: 'A simple yet fun Tic Tac Toe game built using React with clean UI and logic.',
    link: 'https://github.com/DevSrilatha/Tic-Tac-Toe',
  },
  {
    title: 'NovaNews App',
    description: 'A React-based news app that fetches real-time headlines using the NewsAPI.',
    link: 'https://github.com/DevSrilatha/NovaNews-App',
  },
  {
    title: 'TextUtiles',
    description: 'React utility app to analyze and transform your text — convert, count, and clean it easily.',
    link: 'https://github.com/DevSrilatha/TextUtiles',
  },
  {
    title: 'Currency Converter',
    description: 'A lightweight app that converts between currencies using live exchange rates.',
    link: 'https://github.com/DevSrilatha/Currency-converter',
  },
  {
    title: 'Stone Paper Scissors',
    description: 'Classic Stone-Paper-Scissors game implemented in JavaScript with interactive UI.',
    link: 'https://github.com/DevSrilatha/stone-paper-scissors',
  },
];

const Projects = () => {
  return (
    <Container style={{ paddingTop: '100px' }}>
      <h2 className="text-center mb-4">Projects</h2>
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} className="mb-4" key={index}>
            <Card className="h-100 shadow-sm">
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="primary" href={project.link} target="_blank">
                  View Project
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
