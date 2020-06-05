import React, { Component } from "react";
import { findingCase } from "../redux/reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";

class SingleCase extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    const caseId = this.props.match.params.id;
    this.props.dispatchCase(caseId);
    this.setState({
      id: this.props.singleCase.viewCase.caseId,
    });
  }

  async handleDelete() {
    this.state.redirect = true;
    if (this.state.redirect === true) {
      let id = this.props.singleCase.viewCase.caseId;
      this.props.history.push(`/`);
      alert("Case has been sucessfully deleted!");
      window.location.reload(true);
      await axios.delete(`/api/cases/:email/${id}`);
    }
  }

  render() {
    let singleCase = this.props.singleCase.viewCase;
    if (singleCase === {}) {
      return (
        <div>
          <h1>Hi from SingleCase!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <div className="gridContainer">
            <div className="singleCaseCard">
              Subject: {singleCase.subject || "Not Available"}
            </div>
            <br></br>
            <div className="singleCaseCard">Name: {singleCase.name}</div>
            <br></br>
            <div className="singleCaseCard">
              Email Address: {singleCase.email}
            </div>
            <br></br>
            <div className="singleCaseCard">Company: {singleCase.company}</div>
            <br></br>
            <div className="singleCaseCard">
              <span>
                {" "}
                <button className="viewCase">
                  <Link to={`/cases`} className="viewButtonText">
                    Find More Cases
                  </Link>
                </button>
                <button className="deleteCase" onClick={this.handleDelete}>
                  Delete Case
                </button>
              </span>
            </div>
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
