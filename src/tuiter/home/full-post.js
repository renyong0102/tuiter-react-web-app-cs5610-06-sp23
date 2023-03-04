import "./index.css";
import React from "react";
const FullPost = (
    {
        post=post || {}
    }
) =>{
    return(
        <div className="list-group-item d-flex wd-border-bottom-1px">
            <div className="col-1">
                <img className="wd-avatar-image wd-margin-top-12px-left-16px float-start ms-0" src={`/images/${post.profileImage}`}/>
            </div>

            <div className="col-11 mt-2 ms-2 ps-2 wd-content-max-width-514px">
                <span className="wd-font-size-15px wd-display-inline">{post.userName}</span>
                <i className="bi bi-check-circle-fill text-primary"></i>
                <span className="wd-font-size-15px text-muted">@{post.handle}</span>
                <span className="wd-font-size-15px text-muted">&middot; {post.time}</span>
                <a href="#" className="text-muted text-decoration-none float-end">
                    <i className="bi bi-three-dots"></i>
                </a>

                <div className="wd-font-size-15px wd-content-max-width-506px wd-margin-top-5px wd-margin-bottom-10px wd-margin-bottom-5px">
                    {/*because there is <html> component in post, we use this to let <html> work*/}
                    <span dangerouslySetInnerHTML={{__html:post.post}}></span>
                </div>
                <div className="border mt-2 wd-content-max-width-506px wd-border-radius-15px">
                    {post.title && post.content && post.link ?
                        <div>
                            <img src={`/images/${post.image}`}
                                 className="wd-round-top wd-margin-bottom-0px wd-padding-bottom-0px img-fluid"/>
                            <div className="ms-2 mt-2 mb-2">
                                {post.title && <div>{post.title}<br/></div>}
                                {post.content && <span className="text-muted">{post.content}</span>}
                                {post.link && (
                                    <div>
                                        <a href="#" className="bi bi-link text-muted text-decoration-none"></a>
                                        <a href="#" className="text-muted text-decoration-none">{post.link}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        :
                        <img src={`/images/${post.image}`} className="wd-round wd-margin-bottom-0px wd-padding-bottom-0px img-fluid wd-border-radius-15px"/>
                    }
                </div>
                <div className="nav navbar wd-margin-top-12px wd-content-max-width-400px">
                    <a href="#" className="bi bi-chat-left-text text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-size-12px">{post.comments}</span>
                    </a>
                    <a href="#" className="bi bi-arrow-counterclockwise text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-size-12px">{post.retweet}</span>
                    </a>
                    <a href="#" className="bi bi-heart text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-size-12px">{post.like}</span>
                    </a>
                    <a href="#" className="bi bi-arrow-up text-muted text-decoration-none"></a>
                </div>
            </div>

        </div>
    );
};
export default FullPost;