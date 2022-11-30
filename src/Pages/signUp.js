import axios from "axios";
import React, {useState} from "react";


export default function Signup() {
    const [input, setInput] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password:""
    })

    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }

   const handleSubmit = (e)=> {
    e.preventDefault()
    axios.post("https://real-pink-badger-wig.cyclic.app/api/v1/user/newUser", input)
    .then(res => console.log(res, ">>>"))
    .catch(err => console.log(err))
    console.log(input, ">>>");
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
                className="form-control"
                id="inputPassword"
                placeholder=" Password"
              />
            </div>
          </div>
        <button type="submit" className="btn btn-primary signUpSubmitButton">Register</button>
        </form>
      </div>
    </div>
  );
}
