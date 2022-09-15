import { combineReducers } from "@reduxjs/toolkit";
import counter from "./counter";
import character from "./character";
import auth from './auth';
import profile from "./profiles";
import transaction from "./transactions";
import allprofile from "./allprofiles";
import transfer from "./transfer";
import notes from "./notes";
import topup from "./topup";

const reducer = combineReducers({
  counter,
  character,
  auth,
  profile,
  transaction,
  allprofile,
  transfer,
  notes,
  topup
});

export default reducer;