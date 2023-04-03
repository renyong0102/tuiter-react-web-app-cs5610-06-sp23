import React, {useEffect}from "react";
import TuitItem from "./tuit-item";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

const TuitsList = () => {
    // useSelector to hook the tuits data from the state in the store
    // const tuitsArray = useSelector(state => state.tuits)
    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    // The useEffect hook declares a function callback to be invoked when the component first loads.
    useEffect(() => {
        // on component load invoke find tuits thunk to fetch tuits and
        // put them in the reducer's store so we can extract them with useSelector() and render
        // the tuits here
        dispatch(findTuitsThunk())
    }, [])
    return(
        <>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(tuit =>
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
