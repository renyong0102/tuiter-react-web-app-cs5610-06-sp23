import profile from "./profile.json"
import {createSlice} from "@reduxjs/toolkit";

const initialProfile = {
profile: {
    firstName: 'Renyong',
    lastName: 'Zheng',
    handle: '@renyong',
    profilePicture: 'tesla-red.jpeg',
    bannerPicture: 'spacex.png',
    bio: 'Filler text is text that shares some characteristics of a real written text, ' +
        'but is random or otherwise generated. It may be used to display a sample of fonts, ' +
        'generate text for testing, or to spoof an e-mail spam filter. Wikipedia Faculty, ' +
        'Software Engineer, AI, Space, and renewable enthusiast.Retuits and likes are not endorsements.',
    website: 'youtube.com',
    location: 'San Diego, CA',
    dateOfBirth: '1/1/2023',
    dateJoined: '4/2009',
    born: 'XXXXXX',
    followingCount: 666,
    followersCount: 999
},
};
const profileSlice = createSlice({
    name:'profile',
    initialState:initialProfile,
    reducers:{
        updateProfile:(state, action) => {
            state.profile = action.payload;
        }
    },
});

export default profileSlice.reducer;
export const {updateProfile} = profileSlice.actions;