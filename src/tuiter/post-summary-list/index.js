import React, {useEffect} from "react";
// import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";
import {useSelector, useDispatch} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";

// 3.5 Re-implementing PostSummaryList with React
const PostSummaryList = () => {
    // useSelector to hook the tuits data from the state in the store
    const postsArray = useSelector(state => state.tuitsData.tuits)
    // const {posts, loading} = useSelector( state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    return(
        <ul className="list-group"> {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post}
                    />
                )
            }
        </ul>
    );
};
export default PostSummaryList;
