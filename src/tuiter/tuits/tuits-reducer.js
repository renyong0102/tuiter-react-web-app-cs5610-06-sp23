import {createSlice} from "@reduxjs/toolkit";
import tuits from "./tuits.json"
import {findTuitsThunk, deleteTuitThunk, createTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";

// create an object that represents the currently
// logged in user which contains profile information
// such as username, their avatar logo, and handle.
// Later this will come from users login in
const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.webp",
};

const initialState = {
    tuits: [],
    loading: false
}

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
    initialState:initialState,
    extraReducers: {
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },

        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },

        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },

        // if request is not yet fulfilled …
        // set loading true so UI can display spinner empty tuits since we are still fetching them
        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },

        // when we get response, request is fulfilled
        // we extract/destruct payload from action object
        // turn off loading flag since we have the data
        // payload has tuits from server and update redux state
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },

        // if request times out, or responds with error
        // reset loading flag
        // report error
        [findTuitsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            }
    },
    reducers:{
        // likeToggle(state, action){
        //     const tuit = state.find((tuit)=>
        //         tuit._id === action.payload._id)
        //     // the reducer function use the find() method to find the todo item with the _id
        //     // once it find the correct todo item, it toggles its done property by using !
        //     // if done was true, it become false, otherwise false->true
        //     tuit.liked = !tuit.liked
        //     if (tuit.liked) {
        //         tuit.likes++
        //     } else {
        //         tuit.likes--
        //     }
        // },
        // // add createTuit reducer function which appends
        // // the new tuit in the payload at the beginning of the
        // // array of tuits contained in the state. Also copy
        // // all fields from templateTuit and initialize
        // // the unique identifier with a timestamp
        // createTuit(state, action) {
        //     state.unshift({
        //         ...action.payload,
        //         ...templateTuit,
        //         _id:(new Date().getTime()),
        //     })
        // },
        // // reducer function to delete
        // // tuit looks up index of tuit
        // // from state comparing each tuit's
        // // ID with action's payload, then
        // // splices tuit from state
        // deleteTuit(state, action) {
        //     const index = state.findIndex(
        //         tuit => tuit._id === action.payload
        //     );
        //     state.splice(index, 1);
        // }
    }
});
export default tuitsSlice.reducer;
export const {likeToggle, createTuit, deleteTuit} = tuitsSlice.actions
