import React from "react";
// we delete this part because we moved the who json file into the reducer instead
// import whoArray from '../data/who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";
// import the hook to retrieve state from reducer
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    // retrieve state from the store
    const whoArray = useSelector((state) => state.who);
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Who to follow</h3>
                </li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }
            </ul>
        </div>

    );// provide the store to the rest
// of the application so it can
// pull from the global state

};

export default WhoToFollowList;
