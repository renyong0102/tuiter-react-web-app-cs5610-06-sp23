import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    // useSelector to hook the tuits data from the state in the store
    const tuitsArray = useSelector(state => state.tuits)
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
