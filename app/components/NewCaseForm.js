import React, { Component } from "react";
import axios from "axios";
class NewCaseForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      subject: "",
      company: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    await axios.post("/api/cases/caseForm", this.state);
    this.setState({
      name: "",
      email: "",
      subject: "",
      company: "",
    });
  }
  render() {
    return (
      <div className="cardContainer">
        <div className="card">
          <h2>New Case Form</h2>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="card">
            <label htmlFor="name"></label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
              className="emailField"
              placeholder="Please enter contact name here"
            />
            <label htmlFor="email"></label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              className="emailField"
              placeholder="Please enter contact email address here"
            />
            <label htmlFor="company"></label>
            <input
              type="text"
              name="company"
              value={this.state.company}
              onChange={this.handleChange}
              required
              className="emailField"
              placeholder="Please enter company name here"
            />
            <label htmlFor="subject"></label>
            <input
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleChange}
              required
              className="emailField"
              placeholder="What should be the case subject line"
            />
            <div>
              <button type="submit" className="submitButton">
                Go!
              </button>
            </div>
          </div>
        </form>
        ;
      </div>
    );
  }
}

export default NewCaseForm;
