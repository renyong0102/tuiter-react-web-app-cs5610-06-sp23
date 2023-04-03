import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {likeToggle} from "./tuits-reducer";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        // parameter
        tuit = tuit || {}
    }
) => {
    const dispatch = useDispatch();
    const toggleLikeHandler = (tuit) => {
        const likedValue = !tuit.liked
        const NumOfLike = likedValue? tuit.likes + 1 : tuit.likes - 1
        dispatch(updateTuitThunk({
            ...tuit,
            liked: likedValue,
            likes: NumOfLike
        }))
    }
    const toggleDislikeHandler = (tuit) => {
        const dislikedValue = !tuit.disliked
        const NumOfDislike = dislikedValue? tuit.dislikes + 1 : tuit.dislikes - 1
        dispatch(updateTuitThunk({
            ...tuit,
            disliked: dislikedValue,
            dislikes: NumOfDislike
        }))
    }
    return(
        <div className="nav navbar wd-margin-top-12px wd-content-max-width-400px">
            <a href="#" className="bi bi-chat-left-text text-muted text-decoration-none">
                <span className="ms-2 text-muted wd-font-size-12px">{tuit.replies}</span>
            </a>
            <a href="#" className="bi bi-arrow-counterclockwise text-muted text-decoration-none">
                <span className="ms-2 text-muted wd-font-size-12px">{tuit.retuits}</span>
            </a>
            <i className={tuit.liked ? "bi bi-heart-fill text-danger text-decoration-none" :
                "bi bi-heart text-muted text-decoration-none"}
               onClick={() => toggleLikeHandler(tuit)}>
                <span className="text-muted wd-font-size-12px ms-2">{tuit.likes}</span>
            </i>
            <i className={tuit.disliked ? "bi bi-hand-thumbs-down-fill text-black text-decoration-none" :
                "bi bi-hand-thumbs-down text-muted text-decoration-none"}
               onClick={() => toggleDislikeHandler(tuit)}>
                <span className="text-muted wd-font-size-12px ms-2">{tuit.dislikes}</span>
            </i>
            <a href="#" className="bi bi-arrow-up text-muted text-decoration-none"></a>
        </div>
    );
};
export default TuitStats;