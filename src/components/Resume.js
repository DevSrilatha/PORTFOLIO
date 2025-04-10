import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Resume = () => {
  const resumePath = "/Srilatha_Nama_Resume (1).pdf";

  return (
    <Container style={{ paddingTop: '100px', textAlign: 'center' }}>
      <h2 className="mb-4">My Resume</h2>

      <iframe
        src={resumePath}
        title="Resume"
        width="100%"
        height="600px"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      >
        Your browser does not support iframes.
      </iframe>

      <div className="text-center mt-4">
        <p>
          🌐 Check out my live project:{" "}
          <a
            href="https://client-eight-azure.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI Job Recommendation Platform
          </a>
        </p>
      </div>

      <div className="mt-4">
        <Button
          variant="primary"
          href={resumePath}
          download
          target="_blank"
        >
          Download Resume
        </Button>
      </div>
    </Container>
  );
};

export default Resume;
