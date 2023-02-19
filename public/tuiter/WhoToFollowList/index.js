/* eslint-env jquery */

import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
       <ul class="list-group">
           <li class="list-group-item d-flex justify-content-between align-items-center">
               <b>Who to follow</b>
           </li>
       <!-- continue here -->
           ${
            who.map(who => {
                return (WhoToFollowListItem(who));
            }).join('')
            }
        </ul>
    `);
}
export default WhoToFollowList;

$('#who-to-follow').append(`
   <div class="container">
       <h1>Who to follow</h1>
       ${WhoToFollowList()}
   </div>
`);