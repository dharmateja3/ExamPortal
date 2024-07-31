import React from 'react';

const About = () => {
  return(
  <>
    <div className="container" style={{"backgroundColor":"#f8f9fa"}}>
    <div className="row">
      <div className="col-md-12 text-center fs-5">
        <h2 className="fs-1 mb-3">About Exam Portal</h2>
        <p>Welcome to Exam Portal, your number one source for all online exams. We're dedicated to providing you the very best of online assessments, with an emphasis on reliability, comprehensiveness, and ease of use.</p>
        <p>Founded in 2023, Exam Portal has come a long way from its beginnings. When we first started out, our passion for making exam preparation accessible and straightforward drove us to start our own business.</p>
        <p>We hope you enjoy our platform as much as we enjoy offering it to you. If you have any questions or comments, please don't hesitate to contact us.</p>
        <p>Sincerely,<br/>The Exam Portal Team</p>
      </div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4 text-center">
        <h3>Our Mission</h3>
        <p>Our mission is to simplify the process of taking and managing exams, making it easier for students and institutions alike.</p>
      </div>
      <div className="col-md-4 text-center">
        <h3>Our Vision</h3>
        <p>We envision a world where educational assessments are seamlessly integrated into the learning process, enhancing both teaching and learning experiences.</p>
      </div>
      <div className="col-md-4 text-center">
        <h3>Our Values</h3>
        <p>We believe in integrity, innovation, and excellence. Our platform is built on these values, ensuring a trustworthy and advanced solution for all your exam needs.</p>
      </div>
    </div>
  </div>
  
  </>
  );
};

export default About;
