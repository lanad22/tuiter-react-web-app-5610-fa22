import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                  <div class="col-12">
                    <div class="rounded-pill border wd-border-light wd-float-left bg-white" style="width: 90%">
                        <div class="input-group">
                            <div class="ps-3 pt-1 input-group-addon">
                                <i class="fa fa-search" style="color: gray; vertical-align: bottom"></i>
                            </div>
                            <input type="email"
                                   class="pt-2 pb-2 ps-3 wd-input"
                                   placeholder="Search Twitter"></div>
                    </div>
                    <i class="p-1 fa fa-cog fa-2x wd-float-right" style="color: #3498DB"></i>
                </div>
           </div>
           <ul class="pt-2 nav mb-2 nav-tabs">
                      <!-- tabs -->
                    <li class="nav-item">
                        <a href="./for-you.html" class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a href="./trending.html" class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a href="./news.html" class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a href="./sports.html" class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-none d-md-block">
                        <a href="./entertainment.html" class="nav-link" href="#">Entertainment</a>
                    </li>
           </ul>

         
           <!-- image with overlaid text -->
           <div class="card text-white">
                <img class="card-img-top" src="../../../images/starship.jpg" alt="">
                <div class="position-absolute bottom-0 fw-bold">
                    <p class="p-2 m-0" style="font-size: 50px; color: rgb(40,40,40)">SpaceX's Starship</p>
                </div>
           </div>
           
            ${PostSummaryList()}
    `);
}
export default ExploreComponent;
