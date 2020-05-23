import React, { Component } from "react";
// import { gettingCases } from "../redux/reducers";
// import { connect } from "react-redux";
// import { Link } from "react-router-dom";

class SingleCase extends Component {
  constructor() {
    super();
    // this.state = {
    //   email: "",
    // };
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
    // this.props.dispatchCases(this.state.email);
    // this.setState({
    //   email: "",
    // });
  }

  render() {
    // const singleCase = this.props.caseList.caseList;
    // if (!singleCase) {
    //   return (
    //     <div>
    //       <h1>Hi from SingleCase!</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <div key={"case"} className="gridContainer">
    //         <div className="caseCard">TEST FROM SINGLE CASE</div>
    //       </div>
    //     </div>
    //   );
    // }
    return (
      <div>
        <div key={"case"} className="gridContainer">
          <div className="caseCard">TEST FROM SINGLE CASE</div>
        </div>
      </div>
    );
  }
}

export default SingleCase;

{
  /* <span className="caseName miniCard">
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
<button className="viewCase">View Case</button>
<button className="deleteCase">Delete Case</button>

const mapState = (state) => ({
  singleCase: state,
});

const mapDispatch = (dispatch) => ({
  dispatchCases: (email) => dispatch(gettingCases(email)),
});

export default connect(mapState, mapDispatch)(AllCases); */
}
