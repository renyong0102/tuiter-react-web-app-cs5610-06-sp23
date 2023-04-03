// 2.6 Creating a Tuiter placeholder component
import React from "react";
import ExploreComponent from "./explore";
import {Link, Route, Routes} from "react-router-dom";
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import WhoToFollowList from "./who-to-follow-list";
import PostSummaryItem from "./post-summary-list/post-summary-item";
import PostSummaryList from "./post-summary-list";
import HomeComponent from "./home";

import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import profileReducer from "./profile/profile-reducer";

import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile";

const store = configureStore({
    reducer: {
        who:whoReducer,
        tuitsData:tuitsReducer,
        profile:profileReducer
    }
});

function Tuiter() {
    return(
        // provide the store to the rest
        // of the application so it can
        // pull from the global state
        <Provider store={store}>
            <div className="row mt-2">
                <Nav/>
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="Explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}
export default Tuiter
