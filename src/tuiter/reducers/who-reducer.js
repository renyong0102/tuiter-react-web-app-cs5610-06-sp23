import {createSlice} from "@reduxjs/toolkit";
import whoArray from "../data/who.json";

// we have who.json file which it stored who array object
// we can use who object into createSlice-initialState
const whoSlice = createSlice({
    name:"who",
    // initialize the reducer's state with who json file
    initialState:whoArray
});

export default whoSlice.reducer;