import React from 'react';

const Contact = () => {
  return(
    <>
      <div className="container p-3" style={{"backgroundColor":"#f8f9fa"}}>
    <div className="row">
      <div className="col-md-12 text-center">
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please don't hesitate to contact us using the form below.</p>
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-md-8">
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
          </div>
          <div className="form-group">
            <label for="subject">Subject</label>
            <input type="text" className="form-control" id="subject" placeholder="Subject" required/>
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message" rows="4" placeholder="Type your message here" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
    </>
  );
};

export default Contact;
