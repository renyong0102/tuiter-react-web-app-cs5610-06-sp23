import React from "react";
const PostSummaryItem = ({post}) => {
    return(
        <li className="list-group-item">
            <div className="d-flex">
                <div className="me-auto">
                    <div>{post.username} &middot; {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>
                </div>
                <div className="float-end">
                    <img width={100} height={100} className="rounded-4 d-flex" src={`/images/${post.image}`}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
