/* eslint-env jquery */
import fullposts from "./fullposts.js";
import PostItem from "./PostItem.js";
const PostList = () =>{
    return(`
        <div class="list-group">
           ${
        fullposts.map(post => {
            return (PostItem(post));
        }).join('')
    }
        </div>
    `);
}
export default PostList;

$('#post-list').append(`
   <div class="container">
       <h1>Post Summary List</h1>
       ${PostList()}
   </div>
`);