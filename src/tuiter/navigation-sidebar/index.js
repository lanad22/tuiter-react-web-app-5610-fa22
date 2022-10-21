import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div className="list-group">
            <a href="#" className="list-group-item">
                <i className="bi bi-twitter"></i>
            </a>
            <Link to="/tuiter/home" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className = "col-1"><i className="bi bi-house-door pe-2"></i></div>
                    <div className="col d-none d-xl-block">Home</div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-hash pe-2"></i></div>
                    <div className="col d-none d-xl-block">Explore</div>
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-journals pe-2"></i></div>
                    <div className="col d-none d-xl-block">Labs</div>
                </div>
            </Link>
            <a href="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-bell pe-2"></i></div>
                    <div className="col d-none d-xl-block">Notifications</div>
                </div>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-envelope pe-2"></i></div>
                    <div className="col d-none d-xl-block">Messages</div>
                </div>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-bookmark pe-2"></i></div>
                    <div className="col d-none d-xl-block">Bookmarks</div>
                </div>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-card-list pe-2"></i></div>
                    <div className="col d-none d-xl-block">Lists</div>
                </div>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-person pe-2"></i></div>
                    <div className="col d-none d-xl-block">Profile</div>
                </div>
            </a>
            <a href="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className = "row">
                    <div className = "col-1"><i className="bi bi-three-dots pe-2"></i></div>
                    <div className="col d-none d-xl-block">More</div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;