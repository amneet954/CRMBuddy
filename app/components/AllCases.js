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
                <h2>
                  <label htmlFor="email" className="caseName">
                    Email:{" "}
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <input type="submit" />
                </h2>
              </div>
            </div>
          </form>

          {caseList.length ? (
            caseList.map((singleCase) => {
              return (
                <div key={"case"} className="gridContainer">
                  <div className="caseCard">
                    <span className="caseName miniCard">
                      Name: {singleCase.name}
                    </span>
                    <span className="caseCompany miniCard">
                      Company: {singleCase.company}
                    </span>
                    <span className="caseEmail miniCard">
                      Email:{singleCase.email}
                    </span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="cardContainer">
              <div className="card">
                <h1>no list yet</h1>
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
