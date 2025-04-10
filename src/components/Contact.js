import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container style={{ paddingTop: '100px' }}>
      <h2 className="text-center mb-4">Contact Me</h2>

      <Row className="justify-content-center">
        <Col md={8}>
          <Form>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>

      <div className="text-center mt-5">
  <h5>Connect with me</h5>
  <div style={{ fontSize: '1.5rem' }}>
    <a
      href="https://github.com/DevSrilatha"
      target="_blank"
      rel="noopener noreferrer"
      className="me-3 text-dark"
    >
      <FaGithub />
    </a>
    <a
      href="https://linkedin.com/in/srilatha-nama-b4252b306"
      target="_blank"
      rel="noopener noreferrer"
      className="me-3 text-primary"
    >
      <FaLinkedin />
    </a>
    <a href="mailto:22211a3148@bvrit.ac.in" className="text-danger">
      <FaEnvelope />
    </a>
  </div>
</div>

    </Container>
  );
};

export default Contact;
