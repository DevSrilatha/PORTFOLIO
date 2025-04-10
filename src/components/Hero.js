import React from 'react';
import { Container } from 'react-bootstrap';
// import './Hero.css';

const Home = () => {
  return (
    <section
      id="home"
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}
    >
      <Container className="text-center">
        <h1>
          Hello, I'm <span className="text-primary">Srilatha Nama</span>
        </h1>
        <p className="lead">Aspiring Software Development Engineer</p>
        <a href="/projects" className="btn btn-primary mt-3">
          View My Work
        </a>
      </Container>
    </section>
  );
};

export default Home;
