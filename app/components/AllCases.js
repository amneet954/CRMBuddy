import React, { Component } from "react";
import { gettingCases } from "../redux/reducers";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class AllCases extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
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

          {caseList.length ? (
            caseList.map((singleCase) => {
              return (
                <div key={"case"} className="gridContainer">
                  <div className="caseCard">
                    <span className="caseName miniCard">
                      <strong>Name: </strong>
                      {singleCase.name}
                    </span>
                    <span className="caseCompany miniCard">
                      <strong>Company: </strong>
                      {singleCase.company}
                    </span>
                    <span className="caseEmail miniCard">
                      <strong>Email: </strong>
                      {singleCase.email}
                    </span>
                    <button className="editCase">Edit Case</button>
                    <button className="deleteCase">Delete Case</button>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cardContainer">
              <div className="card">
                <h1>No List Yet</h1>
              </div>
            </div>
          )}
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
