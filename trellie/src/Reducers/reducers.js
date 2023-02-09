import { combineReducers } from "redux";

const inputReducer = (state = "jeroen", action) => {
  if (action.type === "test") {
    state = action.payload;
  }
  return state;
}

const trelliesReducer = (state = [], action) => {
  if (action.type === "trellies") {
    state = action.payload;
  }
  return state;
}

const rootReducer = (state = {}, action) => {
  return ({
    trellies: trelliesReducer(state.trellies, action),
  });
}

export default rootReducer;