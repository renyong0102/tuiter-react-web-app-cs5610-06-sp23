import profile from "./profile.json"
import {createSlice} from "@reduxjs/toolkit";

const profileSlice = createSlice({
    name:'proflie',
    initialState:profile,
    reducers:{

    }

});

export default profileSlice.reducer;
