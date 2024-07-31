import React from 'react';
import './Courses.css';

const Courses = () => {
  return (
    <>
      <div className="container mt-5" style={{"backgroundColor":"#f8f9fa"}}>
        <h1 className="mb-4">Our Courses</h1>
        <div className="row">
            <div className="col-md-3 mb-4">
                <div className="card card-hover">
                    <img src="https://media.istockphoto.com/id/518002738/photo/java-button-on-computer-keyboard.webp?b=1&s=170667a&w=0&k=20&c=JLfZo-jB94h7gw6ia8SdkxzVwEHVTvnIx-S_uoYlpr4=" className="card-img-top" alt="Java" style={{"height":"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Java</h5>
                        <p className="card-text">Learn the basics and advanced concepts of Java programming.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card card-hover">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSJgEU8pGls7HLBH7pd6NuG7dIP7mQofVjxg&s" className="card-img-top" alt="Spring Boot" style={{"height":"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">Spring Boot</h5>
                        <p className="card-text">Build robust backend applications using Spring Boot.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card card-hover">
                    <img src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlYWN0anN8ZW58MHx8MHx8fDA%3D" className="card-img-top" alt="ReactJS" style={{"height":"200px"}} />
                    <div className="card-body">
                        <h5 className="card-title">ReactJS</h5>
                        <p className="card-text">Develop dynamic front-end applications with ReactJS.</p>
                    </div>
                </div>
            </div>
            <div className="col-md-3 mb-4">
                <div className="card card-hover">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZdAi1JBLq3hEWOrh6_clYIUonlyvFKus8BhCPTM_mY53NE5yM2rr-r9Ohq-8CkB5eUNE&usqp=CAU" className="card-img-top" alt="HTML, CSS, JS" style={{"height":"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">HTML, CSS, JS</h5>
                        <p className="card-text">Master the fundamentals of web development with HTML, CSS, and JavaScript.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Courses;
