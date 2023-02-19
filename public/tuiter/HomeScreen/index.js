// /* eslint-env jquery */

import NavigationSidebar from "../NavigationSidebar/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";

function exploreComponent() {
    // bind with index.html <div> id: wd-explore
    $('#wd-home').append(`
<!--       <h2>Explore</h2>-->
    <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
<!--        <h3>NavigationSidebar</h3>-->
<!--        from file NavigationSidebar - index.js-->
            ${NavigationSidebar('Home')}
        </div>
        <div class="col-10 col-lg-7 col-xl-6">
<!--        <h3>Full Post List</h3>-->
            ${PostList()}
            
        </div>
        <div class="d-none d-lg-block col-lg-4 col-xl-4">
<!--        <h3>PostSummaryList </h3>-->
            ${PostSummaryList()}
            
        </div>
    </div>
   `);
}
$(exploreComponent);