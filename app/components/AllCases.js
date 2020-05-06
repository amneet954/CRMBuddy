import React, { Component } from "react";
import { gettingCases } from "../redux/reducers";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class AllCases extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    const email = "asandhu@liveperson.com";
    this.props.dispatchCases(email);
  }
  render() {
    const caseList = this.props.caseList.caseList;
    console.log(caseList);
    if (!caseList) {
      return (
        <div>
          <h1>Hi from AllCase!</h1>
        </div>
      );
    } else {
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
