import axios from "axios";
import { combineReducers } from "redux";

// ACTION TYPES
const GOT_DOMAIN = "GOT_DOMAIN";
const GOT_CASES = "GOT_CASES";
const CREATE_CASE = "CREATE_CASE";
const VIEW_CASE = "VIEW_CASE";

//  ACTION CREATORS
const getDomain = (domain) => ({ type: GOT_DOMAIN, domain });
const getCases = (email) => ({ type: GOT_CASES, email });
const creatingCase = (newCase) => ({ type: CREATE_CASE, newCase });
const viewingCase = (singleCase) => ({ type: VIEW_CASE, singleCase });

// THUNKS

export const gettingDomain = () => async (dispatch) => {
  const response = await axios.get(`/api/cases`);
  dispatch(getDomain(response.data));
};

export const gettingCases = (email) => async (dispatch) => {
  const response = await axios.get(`/api/cases/${email}`);
  dispatch(getCases(response.data));
};

export const makingCase = (obj) => async (dispatch) => {
  const response = await axios.post("/api/cases/caseForm", obj);
  dispatch(creatingCase(response.data));
};

export const findingCase = (singleCase) => async (dispatch) => {
  const response = await axios.get(`/api/cases/:email/${singleCase}`);
  dispatch(viewingCase(response.data));
};

//  SUB REDUCERS

const domainReducer = (domain = {}, action) => {
  switch (action.type) {
    case GOT_DOMAIN:
      return action.domain;
    default:
      return domain;
  }
};

const casesReducer = (allCases = [], action) => {
  switch (action.type) {
    case GOT_CASES:
      // return "test";
      return action.email;
    default:
      return allCases;
  }
};

const caseCreationReducer = (newCase = {}, action) => {
  switch (action.type) {
    case CREATE_CASE:
      return action.newCase;
    default:
      return newCase;
  }
};

const viewCaseReducer = (singleCase = {}, action) => {
  switch (action.type) {
    case VIEW_CASE:
      return action.singleCase;
    default:
      return singleCase;
  }
};
// COMBINED REDUCER

const combinedReducers = combineReducers({
  domain: domainReducer,
  caseList: casesReducer,
  newCase: caseCreationReducer,
  viewCase: viewCaseReducer,
});

export default combinedReducers;
