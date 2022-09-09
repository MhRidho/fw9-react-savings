import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import character from "./character";
import auth from './auth';
import profile from "./profiles";
import transaction from "./transactions";

const reducer = combineReducers({
  counter,
  character,
  auth,
  profile,
  transaction
});

export default reducer;