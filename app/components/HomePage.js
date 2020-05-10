import React, { Component } from "react";
import { gettingDomain } from "../redux/reducers";
import { connect } from "react-redux";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.dispatchDomain();
  }
  render() {
    if (!this.props.domainlist.domain) {
      return (
        <div className="card">
          <h1>
            You must enter a valid company name and email address to view cases.
          </h1>
        </div>
      );
    } else {
      return (
        <div className="card">
          <h2>
            Salesforce Instance:{" "}
            {this.props.domainlist.domain.salesforceInstance}
          </h2>
        </div>
      );
    }
  }
}

const mapState = (state) => ({
  domainlist: state,
});

const mapDispatch = (dispatch) => ({
  dispatchDomain: () => dispatch(gettingDomain()),
});

export default connect(mapState, mapDispatch)(HomePage);
