// 3.1.1 Importing React.js
import React from "react";
import navi from "./navigat.json"
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = (
    // {
    //     // 3.1.2 Object deconstructed parameter
    //     active = 'Explore',
    // }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return(
        <div className="list-group">
            <a className="list-group-item"><i className="bi bi-twitter text-primary"></i></a>
            {
                navi.map(nav =>
                    <div key={nav.name}>
                        <Link to={`/tuiter/${nav.name}`} className={`list-group-item d-block d-xl-none
                            ${active === nav.name?'active':''}`}>
                            <i className={`${nav.icon}`}></i>
                        </Link>
                        <Link to={`/tuiter/${nav.name}`} className={`list-group-item d-none d-xl-block
                            ${active === nav.name?'active':''}`}>
                            <i className={`${nav.icon}`}></i>
                                {nav.label}
                        </Link>
                    </div>
                )
            }


            {/*<a className={`list-group-item */}
            {/*                ${active === 'home'?'active':''}`}><i className="bi bi-house-door me-2"></i>*/}
            {/*    Home</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'explore'?'active':''}`}><i className="bi bi-compass me-2"></i>*/}
            {/*    Explore</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'notifications'?'active':''}`}><i className="bi bi-bell me-2"></i>*/}
            {/*    Notifications</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'messages'?'active':''}`}><i className="bi bi-chat me-2"></i>*/}
            {/*    Messages</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'bookmarks'?'active':''}`}><i className="bi bi-bookmark me-2"></i>*/}
            {/*    Bookmarks</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'lists'?'active':''}`}><i className="bi bi-list me-2"></i>*/}
            {/*    Lists</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'profile'?'active':''}`}><i className="bi bi-people me-2"></i>*/}
            {/*    Profile</a>*/}
            {/*<a className={`list-group-item*/}
            {/*                ${active === 'more'?'active':''}`}><i className="bi bi-three-dots me-2"></i>*/}
            {/*    More</a>*/}
            {/*<button className="rounded-pill bg-primary mt-2" style={{border: "none"}}><span className="text-white">Tuit</span></button>*/}
            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tuit</a>
            </div>
        </div>
    );
};
export default NavigationSidebar;