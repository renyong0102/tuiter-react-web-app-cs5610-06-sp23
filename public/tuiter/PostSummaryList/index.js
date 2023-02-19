/* eslint-env jquery */

import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";
const PostSummaryList = () =>{
    return(`
        <div class="list-group">
           ${
            posts.map(post => {
                return (PostSummaryItem(post));
            }).join('')
            }
        </div>
    `);
}
export default PostSummaryList;

$('#post-summary-list').append(`
   <div class="container">
       <h1>Post Summary List</h1>
       ${PostSummaryList()}
   </div>
`);