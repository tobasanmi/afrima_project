import React from "react";

export default function ContactForm() {
  return (
    <div className="contactFormWrapper">
      {/* <div className="contactFormHeader">
       
      </div> */}

      <div className="contactForm">
      <h1 className="contactFormHeading">Contact us</h1>
        <p>
          Should you wish to exihibit at Afrima or if you would like to know more
        </p>
      <form>
  <div className="form-group row">
    <div className="col-sm-10">
      <input type="text" className="form-control name"  id="inputEmail3" placeholder="Name"/>
    </div>
  </div>

<div className="form-group row">
    <div className="col-sm-10">
      <input type="email" className="form-control email" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>

<div className="form-group row">
    <div className="col-sm-10">
      <textarea className="form-control textarea" id="inputEmail3" placeholder="Go ahead, we are listening..."/>
    </div>
  </div>

  <button type="button" className="btn btn-info submitButton">Submit</button> 
</form>
      </div>
      <div className="contactByEmail">
        <p>For more information or to book your stand</p>
      </div>
    </div>
  );
}
