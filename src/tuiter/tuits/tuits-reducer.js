import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"

// create an object that represents the currently
// logged in user which contains profile information
// such as username, their avatar logo, and handle.
// Later this will come from users login in
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
};

// create a template tuit object with some default
// values and copy over the fields userName, handle and
// image from the currentUser
const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const tuitsSlice = createSlice({
    name:'tuits',
    initialState:tuits,
    reducers:{
        likeToggle(state, action){
            const tuit = state.find((tuit)=>
                tuit._id === action.payload._id)
            // the reducer function use the find() method to find the todo item with the _id
            // once it find the correct todo item, it toggles its done property by using !
            // if done was true, it become false, otherwise false->true
            tuit.liked = !tuit.liked
            if (tuit.liked) {
                tuit.likes++
            } else {
                tuit.likes--
            }
        },
        // add createTuit reducer function which appends
        // the new tuit in the payload at the beginning of the
        // array of tuits contained in the state. Also copy
        // all fields from templateTuit and initialize
        // the unique identifier with a timestamp
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id:(new Date().getTime()),
            })
        },
        // reducer function to delete
        // tuit looks up index of tuit
        // from state comparing each tuit's
        // ID with action's payload, then
        // splices tuit from state
        deleteTuit(state, action) {
            const index = state.findIndex(
                tuit => tuit._id === action.payload
            );
            state.splice(index, 1);
        }
    }
});
export default tuitsSlice.reducer;
export const {likeToggle, createTuit, deleteTuit} = tuitsSlice.actions
