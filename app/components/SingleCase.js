import React, { Component } from "react";
// import { gettingCases } from "../redux/reducers";
import { findingCase } from "../redux/reducers";
import { connect } from "react-redux";
import e from "express";
// import { Link } from "react-router-dom";

class SingleCase extends Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const caseId = this.props.match.params.id;
    this.props.dispatchCase(caseId);
  }

  render() {
    let singleCase = this.props.singleCase.viewCase;
    console.log(singleCase);
    console.log("This is : " + singleCase.subject);
    if (!singleCase.subject) {
      return (
        <div>
          <h1>Hi from SingleCase!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="gridContainer">
            <div className="caseCard">{singleCase.subject}</div>
          </div>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  singleCase: state,
});

const mapDispatch = (dispatch) => ({
  dispatchCase: (id) => dispatch(findingCase(id)),
});

export default connect(mapState, mapDispatch)(SingleCase);
