import { combineReducers } from "@reduxjs/toolkit";

import counter from "./counter";

const reducer = combineReducers({
    berhitung: counter
});

export default reducer;