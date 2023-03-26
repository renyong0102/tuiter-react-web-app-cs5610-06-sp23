import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {likeToggle, deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        // parameter
        tuit = tuit || {}
    }
) => {
    // get dispatch
    const dispatch = useDispatch();
    // handle delete event
    // pass tuit's ID to reducer
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id))
    }
    const toggleLike = (tuit) => {
        dispatch(likeToggle(tuit))
    }
    return(
        <li className="list-group-item d-flex">
            <div className="col-1 float-start">
                <img width={48} height={48} className="rounded-circle d-flex" src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-11 mt-2 ms-2 ps-2 float-end">
                <span className="wd-font-size-15px wd-display-inline fw-bold">{tuit.userName}</span>
                <i className="bi bi-check-circle-fill text-primary ms-2"></i>
                <span className="wd-font-size-15px text-muted ms-2">{tuit.handle}</span>
                <span className="wd-font-size-15px text-muted ms-2">&middot; {tuit.time}</span>
                {/*The dispatcher sends the action object to the tuits reducer which we handle this particular type of
                   event in tuits/tuits-reducer.js*/}
                <i className="text-muted text-decoration-none float-end">
                    <i className="bi bi-x-lg" onClick={() => deleteTuitHandler(tuit._id)}></i>
                </i>
                <div className="wd-font-size-15px wd-content-max-width-506px wd-margin-top-5px wd-margin-bottom-10px wd-margin-bottom-5px">
                    {tuit.tuit}
                </div>
                <div className="nav navbar wd-margin-top-12px wd-content-max-width-400px">
                    <a href="#" className="bi bi-chat-left-text text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-size-12px">{tuit.replies}</span>
                    </a>
                    <a href="#" className="bi bi-arrow-counterclockwise text-muted text-decoration-none">
                        <span className="ms-2 text-muted wd-font-size-12px">{tuit.retuits}</span>
                    </a>
                    <i className={tuit.liked ? "bi bi-heart-fill text-danger text-decoration-none" :
                                               "bi bi-heart text-muted text-decoration-none"}
                       onClick={() => toggleLike(tuit)}>
                        <span className="text-muted wd-font-size-12px ms-2">{tuit.likes}</span>
                    </i>
                    <a href="#" className="bi bi-arrow-up text-muted text-decoration-none"></a>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
