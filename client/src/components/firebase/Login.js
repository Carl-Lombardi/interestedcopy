import React, { Component } from 'react';
import fire from '../../config/Fire';
import './login.css';
import logo from "../../pages/home/images/logo.png"

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
      // console.log(u)
    }).catch((error) => {
        console.log(error);
      });
  }

 

  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
     
     
      <div id="form1">
         <h2 id="welcome">Welcome to Interested!</h2>
      ` <img id="logo" src={logo} className="Home-logo" alt="logo" />
        <form>
           <div id="email" className="form-group">
            <label htmlFor="exampleInputEmail1">Email address: </label>
            <input  value={this.state.email} onChange={this.handleChange} type="email" id="emailtext" name="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />
          </div>
          <div id="password" className="form-group">
            <label htmlFor="exampleInputPassword1">Password: </label>
            <input  value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button id="button1" type="submit" onClick={this.login} className="btn btn-primary">Login</button>
          <button id="button2" onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
         </form>
         </div>
       
    );
  }
}
export default Login;