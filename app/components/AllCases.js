import React, { Component } from "react";
import { gettingCases } from "../redux/reducers";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class AllCases extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      display: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  handleSubmit() {
    event.preventDefault();
    this.setState({
      display: true,
    });
    this.props.dispatchCases(this.state.email);
  }
  render() {
    const caseList = this.props.caseList.caseList;
    const { display } = this.state;
    console.log(caseList);
    if (!caseList) {
      return (
        <div>
          <h1>Hi from AllCase!</h1>
        </div>
      );
    } else if (!caseList && display) {
      return (
        <div>
          {caseList.map((singleCase) => {
            return (
              <div key={singleCase.caseId}>
                <h1>{singleCase.name}</h1>
                <h2>{singleCase.company}</h2>
                <h2>{singleCase.email}</h2>
              </div>
            );
          })}
        </div>
      );
    } else {
      return (
        <div>
          {caseList.length ? "" : <h1>Please enter an email address</h1>}
          <form onSubmit={this.handleSubmit} className="text-center">
            <label htmlFor="email">
              <h2>Email: </h2>
            </label>
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <input type="submit" className="btn btn-primary btn-sm" />
          </form>
          {caseList.length ? (
            caseList.map((singleCase) => {
              return (
                <div key={singleCase.caseId}>
                  <h1>{singleCase.name}</h1>
                  <h2>{singleCase.company}</h2>
                  <h2>{singleCase.email}</h2>
                </div>
              );
            })
          ) : (
            <h1>no list yet</h1>
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
