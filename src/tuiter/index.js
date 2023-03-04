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

function Tuiter() {
    return(
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
                </Routes>
            </div>

            <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>

            {/*2.8 Navigating with links in SPAs*/}
            {/*<Nav/>*/}

            {/*3.1.5 Render dynamic classes with embedded expressions */}
            {/*<NavigationSidebar active="home"/>*/}
            {/*3.2 Re-implement WhoToFollowListItem as a React component*/}
            {/*<WhoToFollowListItem/>*/}
            {/*3.3 Re-implemting WhoToFollowList as a React component*/}
            {/*<WhoToFollowList/>*/}
            {/*3.4 Re-implementing PostSummaryItem as a React component*/}
            {/*<PostSummaryItem/>*/}
            {/*example of PostSummaryItem*/}
            {/*<PostSummaryItem post={{*/}
            {/*    topic: "Space",*/}
            {/*    userName: "SpaceX",*/}
            {/*    time: "2h",*/}
            {/*    title: "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",*/}
            {/*    image: "tesla-red.jpeg"*/}
            {/*}}/>*/}

            {/*Remove them when dones testing.*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'NASA', handle: 'NASA',*/}
            {/*    avatarIcon: 'nasa.png',*/}
            {/*}}/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'Tesla', handle: 'tesla',*/}
            {/*    avatarIcon: 'nasa.png',*/}
            {/*}}/>*/}
            {/*<WhoToFollowListItem who={{*/}
            {/*    userName: 'SpaceX', handle: 'SpaceX',*/}
            {/*    avatarIcon: 'nasa.png',*/}
            {/*}}/>*/}
            {/*3.5 Re-implementing PostSummaryList with React*/}
            {/*<PostSummaryList/>*/}
            {/*<h1>Tuiter</h1>*/}
        </div>
    );
}
export default Tuiter
