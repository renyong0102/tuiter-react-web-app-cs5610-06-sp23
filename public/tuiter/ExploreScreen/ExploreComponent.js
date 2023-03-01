import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row mb-2">
                <!-- search field and cog -->
                <div class="col-11">
                    <ul class="list-group">
                        <li class="list-group-item rounded-pill" style="background-color: white">
                            <label for="search">
                               <i class="fa fa-search d-inline text-dark"></i>
                            </label>
                            <input type="text" class="d-inline border-0"
                               placeholder="Search Twitter"
                               id="search"
                               style="outline: none; width: 80%; background-color: white; color: black">
                        </li>
                    </ul>
                </div>
                <div class="col-1">
                    <a href="explore-settings.html">
                        <i class="fa fa-cog fa-2x text-primary mt-1 float-end"></i>
                    </a >
                </div>
           </div>
           <ul class="nav nav-tabs">
                      <!-- tabs -->
               <li class="nav-item">
                  <a class="nav-link active" href="for-you.html">For you</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="trending.html">Trending</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="news.html">News</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="sports.html">Sports</a>
               </li>
               <li class="nav-item d-none d-md-block">
                  <a class="nav-link" href="entertainment.html">Entertainment</a>
               </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img class="mt-2 img-fluid"
                     src="picture/starship.jpeg"
                     alt="starship image">
                <div class="position-absolute bottom-0 left-0 p-2 text-secondary fs-1">
                    SpaceX's Starship
                </div>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
