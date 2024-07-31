import React from 'react';
import Marquee from './Marquee';

const Home = () => {
  return(
    <>
      <center><h1 className='mb-1 '>~Welcome to Exam Portal~</h1></center>
      <hr></hr>
      <Marquee text="Explore our wide range of courses and assessments designed to help you succeed.
                          Join our comprehensive courses in Java, Spring Boot, ReactJS, HTML & CSS, and JavaScript. 
                          Start your journey to becoming a proficient developer today!" />
      <section className="section mb-5 mt-3">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Learn Anywhere, Anytime</h2>
                        <p className='mt-4 fs-3'>Explore our wide range of courses and assessments designed to help you succeed.
                          Join our comprehensive courses in Java, Spring Boot, ReactJS, HTML & CSS, and JavaScript. 
                          Start your journey to becoming a proficient developer today!</p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/id/1486721631/photo/e-learning-graduate-certificate-program-concept-businessman-hand-holding-light-bulb-with.webp?b=1&s=170667a&w=0&k=20&c=1x8pY1fOWCo_LdaloZl96WysFDvdHVru4p0wuupbPcI=" className="img-fluid" alt="e-learning"/>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 order-md-2" >
                        <h2>Prepare with Confidence</h2>
                        <p className='fs-3'>Access mock tests, quizzes, and study materials to boost your exam preparation.
                        Prepare effectively with our extensive collection of mock tests and study materials. 
                        Our resources cover a wide range of topics and are designed to help you practice and master the concepts.
                        </p>
                    </div>
                    <div className="col-md-6 order-md-1">
                        <img src="https://media.istockphoto.com/id/1500285927/photo/young-woman-a-university-student-studying-online.webp?b=1&s=170667a&w=0&k=20&c=w6oDn8-ru4jZhnnEt8AI6KdlgCJIgaaEZ4IMV50DnsQ=" className="img-fluid" alt="e-learning"/>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="section mb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2>Expert Guidance</h2>
                        <p className='fs-3'>Benefit from our expert guidance to navigate your exam preparation journey. Our experienced instructors provide personalized feedback, detailed explanations, and strategic insights to help you master the material and boost your confidence. 
                        Achieve your best results with our dedicated support!
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://media.istockphoto.com/id/656378092/photo/man-have-business-meeting-via-video-call-in-a-cafe.webp?b=1&s=170667a&w=0&k=20&c=FzrYDNKL_VVMR3zXD_IWU47H-gTG98E11fTGqXGOwRE=" className="img-fluid" alt="e-learning"/>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default Home;
