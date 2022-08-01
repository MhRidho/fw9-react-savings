import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import character from "./character";
import auth from './auth';
import profile from "./profiles";

const reducer = combineReducers({
  counter,
  character,
  auth,
  profile
});

export default reducer;