import React from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import {likeToggle} from "./tuits-reducer";

const TuitsList = () => {
    // useSelector to hook the tuits data from the state in the store
    const tuitsArray = useSelector(state => state.tuits)
    const dispatch = useDispatch();
    const toggleLike = (tuit) => {
        dispatch(likeToggle(tuit))
    }
    return(
        <>
            <ul className="list-group">
                {
                    tuitsArray.map(tuit =>
                        <TuitItem
                            key={tuit._id}
                            tuit={tuit}
                        />
                    )
                }
            </ul>
        </>
    );
};
export default TuitsList;
