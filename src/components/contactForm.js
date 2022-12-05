import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactFormModalSuccess from "../modal/contactFormModalSuccess";
import ContactFormModalFailure from "../modal/contactFormModalFailure";




export default function ContactForm({modalSuccess}) {
  const history = useNavigate()

  const [input, setInput] = useState({
      name: "",
      email: "",
      userFeedback:"",
  })

  const [modalShow, setModalShow] = useState(false);

  const handleChange = (e) => {
    setInput({...input, [e.target.name]:e.target.value})
  }

  const showModal = (e) => {
    e.preventDefault()
    if(modalShow == true){
      return modalSuccess
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post("https://exuberant-calf-yoke.cyclic.app/api/v1/user/feedback",input)
    .then(res => {
      console.log(res, "res")
      if( res.status == 201){
        setModalShow(true)
      }
      // else{
      //   return modalFailure
      // }
    })
    .catch(err => console.log(err))
    
  }


  return (
    <div className="contactFormWrapper">
      {/* <div className="contactFormHeader">
       
      </div> */}

      <div className="contactForm">
      <h1 className="contactFormHeading">Contact us</h1>
        <p className="contactParagraph">
          Should you wish to exihibit at Afrima or if you would like to know more
        </p>
      <form onSubmit={handleSubmit,showModal}>
  <div className="form-group row">
    <div className="col-sm-10"> 
      <input type="text" className="form-control name"  id="inputEmail3" placeholder="Name" name = "name" value = {input.name} onChange={handleChange}/>
    </div>
  </div>

<div className="form-group row">
    <div className="col-sm-10">
      <input type="email" className="form-control email" id="inputEmail3" name = "email" value = {input.email} onChange={handleChange} placeholder="Email"/>
    </div>
  </div>

<div className="form-group row">
    <div className="col-sm-10">
      <textarea className="form-control textarea" id="inputEmail3"  name = "userFeedback" value = {input.userFeedback} onChange={handleChange} placeholder="Go ahead, we are listening..."/>
    </div>
  </div>

  <button type="submit" className="btn btn-info submitButton">Submit</button> 
</form>
      </div>
      <div className="contactByEmail">
        <p>For more information or to book your stand</p>
        {/* <img src ={AfrimaLogo}></img> */}
      </div>
    </div>
  );
}
