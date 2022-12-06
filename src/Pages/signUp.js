import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


export default function Signup({props}) {
   const history = useNavigate()
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password:"",
        confirmPassword:""
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

   const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post("https://exuberant-calf-yoke.cyclic.app/api/v1/user/newUser", input)
    .then(res => {console.log(res,"res")
    if(res.status == 200){
      history("/");
    }}
    )
    .catch(err => console.log(err))
   }
  return (
    <div className="signUpContainer">
      <div className="signUpWrapper">
        <h3 className="signUpHeader">Sign Up</h3> 
        <form className="signUpForm" onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="text"
                name="firstname"
                value={input.firstname}
                onChange={handleChange}
                
                className="form-control signUpFirstName"
                placeholder="Firstname"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="text"
                name="lastname"
                value={input.lastname}
                onChange={handleChange}
                className="form-control signUpLastName"
                placeholder="Lastname"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="text"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="form-control signUpEmail"
                placeholder="enter your email address"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={input.password}
                className="form-control signUppassword"
                id="inputPassword"
                placeholder=" Password"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <div className="col-sm-10">
              <input
                type="password"
                name="confirmPassword"
                onChange={handleChange}
                value={input.confrimPassword}
                className="form-control"
                id="inputPassword"
                placeholder=" confirm Password"
                required
              />
            </div>
          </div>
        <button type="submit" className="btn btn-primary signUpSubmitButton">Register</button>
        </form>
      </div>
    </div>
  );
}
