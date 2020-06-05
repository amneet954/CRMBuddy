import React, { Component } from "react";
import { gettingCases } from "../redux/reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
class AllCases extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      view: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit() {
    event.preventDefault();
    this.props.dispatchCases(this.state.email);
    this.setState({
      email: "",
    });
  }

  render() {
    const caseList = this.props.caseList.caseList;
    if (!caseList) {
      return (
        <div>
          <h1>Hi from AllCase!</h1>
        </div>
      );
    } else {
      return (
        <div>
          {caseList.length ? (
            ""
          ) : (
            <div className="cardContainer">
              <div className="card">
                <h1>Please enter an email address</h1>
              </div>
            </div>
          )}

          <form onSubmit={this.handleSubmit}>
            <div className="cardContainer">
              <div className="card">
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                  className="emailField"
                  placeholder="Please enter your email address here"
                />
                <button type="submit" className="submitButton">
                  Go!
                </button>
              </div>
            </div>
          </form>
          <div className="grid-1">
            {caseList.length ? (
              caseList.map((singleCase) => {
                return (
                  <div key={"case"}>
                    <div className="caseCard">
                      <span className="caseSubject miniCard">
                        {singleCase.subject}
                      </span>
                      <br></br>
                      <br></br>
                      <span className="caseName miniCard">
                        Name: {singleCase.name}
                      </span>
                      <br></br>
                      <br></br>
                      <span className="caseCompany miniCard">
                        Company: {singleCase.company}
                      </span>
                      <br></br>
                      <br></br>
                      <span className="caseEmail miniCard">
                        Email: {singleCase.email}
                      </span>
                      <br></br>
                      <br></br>
                      <button className="viewCase">
                        <Link
                          to={`/cases/${singleCase.email}/${singleCase.caseId}`}
                          className="viewButtonText"
                        >
                          View Case
                        </Link>
                      </button>
                      <br></br>
                      <br></br>
                    </div>
                  </div>
                );
              })
            ) : (
              <div></div>
            )}
          </div>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  caseList: state,
});

const mapDispatch = (dispatch) => ({
  dispatchCases: (email) => dispatch(gettingCases(email)),
});

export default connect(mapState, mapDispatch)(AllCases);
