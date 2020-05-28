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
        <div className="cardContainer">
          <div className="card">
            <h1>
              You must enter a valid company name and email address to view
              cases.
            </h1>
          </div>
        </div>
      );
    } else {
      return (
        // <div className="cardContainer">
        //   <div className="card">
        //     <h2>
        //       Salesforce Instance:{" "}
        //       {this.props.domainlist.domain.salesforceInstance}
        //     </h2>
        //   </div>
        // </div>
        <div className="grid-1">
          <div className="item-1">1</div>
          <div className="item-2">2</div>
          <div className="item-3">3</div>
          <div className="item-4">4</div>
          <div className="item-5">5</div>
          <div className="item-6">6</div>
          <div className="item-7">7</div>
          <div className="item-8">8</div>
          <div className="item-9">9</div>
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
