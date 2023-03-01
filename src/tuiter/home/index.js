import React from "react";
import FullPost from "./full-post";
import postArray from './fullpost.json';

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
                postArray.map(post =>
                    <FullPost
                        key={post.id} post={post}/> )
            }
        </ul>
    );
};
export default HomeComponent;