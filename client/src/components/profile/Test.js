import React, { Component } from 'react';
import Toolbar from '../toolbar/toolbar';
import './profile.css';
import API from '../../utils/API';
import { Input, } from "./testbtn";
import ContainedButtons from '../button/button';
class PostForm extends Component {
  state = {
    users: [],
    name: '',
    age: '',
    gender: '',
    state: '',
    hobbies: '',
    email: '',
  };

  //try to update users
  updateUser = id => {
    API.updateUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.age) {
      API.saveUser({
        name: this.state.name,
        age: this.state.age,
        gender: this.state.gender,
        state: this.state.state,
        hobbies: this.state.hobbies,
        email: this.state.email,
      })
        // .then(res => this.loadUsers())
        .catch(err => console.log(err));
        alert("Profile Submitted! Please go to the Results Page for all Interested Users!");
    }
  };

  render() {
    const { name, age, gender, state, hobbies, email, } = this.state

    return (
      <div className="profilepage">
        <Toolbar />
        <form onSubmit={this.handleFormSubmit} id="formbtn">
          <div id="name">
            <label>Name:  </label>
            <Input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="age">
            <label>Age:  </label>
            <Input
              type="text"
              name="age"
              value={age}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="gender">
            <label>Gender:  </label>
            <Input
              type="text"
              name="gender"
              value={gender}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="state">
            <label>State:  </label>
            <Input
              type="text"
              name="state"
              value={state}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="hobbies">
            <label>Hobbies:  </label>
            <Input
              type="text"
              name="hobbies"
              value={hobbies}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="email">
            <label>Email:  </label>
            <Input
              type="text"
              name="email"
              value={email}
              onChange={this.handleInputChange}
            />
          </div>
          <div id="button">

            <ContainedButtons
              onClick={this.handleFormSubmit}
            >
              Submit User

           </ContainedButtons>
          </div>
        </form>
      </div>
    )
  }
}

export default PostForm