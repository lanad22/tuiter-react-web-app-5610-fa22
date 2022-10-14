const NavigationSidebar = (active) => {
    return (`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
     <a class="list-group-item ${active === 'Home'?'active':''}" href="../HomeScreen/index.html">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-home"></i></div>
            <div class="ps-2 col d-none d-xl-block">Home</div>
        </div>
     </a>
     <a class="list-group-item ${active === 'Explore'?'active':''}" href="../explore/index.html">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-hashtag"></i></div>
            <div class="ps-2 col d-none d-xl-block">Explore</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-bell"></i></div>
            <div class="ps-2 col d-none d-xl-block">Notifications</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-envelope"></i></div>
            <div class="ps-2 col d-none d-xl-block">Messages</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-bookmark"></i></div>
            <div class="ps-2 col d-none d-xl-block">Bookmarks</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-list"></i></div>
            <div class="ps-2 col d-none d-xl-block">Lists</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-user"></i></div>
            <div class="ps-2 col d-none d-xl-block">Profile</div>
        </div>
     </a>
     <a class="list-group-item" href="#">
        <div class="row">
            <div class="col-2">
                <i class="fa fa-circle-ellipsis"></i></div>
            <div class="ps-2 col d-none d-xl-block">More</div>
        </div>
     </a>
     
      
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;

