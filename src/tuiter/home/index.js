import React from "react";
// import FullPost from "./full-post";
import TuitsList from "../tuits/tuits-list";
// import postArray from './fullpost.json';
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h3>Home</h3>
            <WhatsHappening/>
            <TuitsList/>
        </>

        // <ul className="list-group">
        //     {
        //         postArray.map(post =>
        //             <TuitsList
        //                 key={post.id} post={post}/> )
        //     }
        // </ul>
    );
};
export default HomeComponent;