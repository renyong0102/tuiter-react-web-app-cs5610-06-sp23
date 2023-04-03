import React from "react";
import "./index.css";
import {useDispatch} from "react-redux";
import {likeToggle, deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";


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
        dispatch(deleteTuitThunk(id))
    }
    const toggleLikeHandler = (tuit) => {
        dispatch(likeToggle(tuit))
    }
    return(
        <li className="list-group-item d-flex">
            <div className="col-1 float-start">
                <img width={48} height={48} className="rounded-circle d-flex" src={`/images/${tuit.image}`}/>
            </div>
            <div className="col-11 mt-2 ms-2 ps-2 float-end">
                <span className="wd-font-size-15px wd-display-inline fw-bold">{tuit.username}</span>
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
                <TuitStats tuit={tuit}/>
            </div>
        </li>
    );
};
export default TuitItem;
