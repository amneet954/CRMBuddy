import axios from "axios";

// ACTION TYPES
export default as const GOT_DOMAIN = "GOT_DOMAIN";
const GOT_CASES = "GOT_CASES";
const CREATE_CASE = "CREATE_CASE";

//  ACTION CREATORS
export const getDomain = (domain) => ({ type: GOT_DOMAIN, domain });
const getCases = (email) => ({ type: GOT_CASES, email });
const creatingCase = (newCase) => ({ type: CREATE_CASE, newCase });

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
