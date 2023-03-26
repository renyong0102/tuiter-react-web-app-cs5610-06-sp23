import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const ProfileItem = () => {
    const {profile} = useSelector(state => state.profile)
    return(
        <div className="border">
            <div className="row">
                <div className="col-1 mt-4 ms-4 float-start">
                    <Link to="/tuiter/home" className="text-dark fw-bold">
                        <i className="bi bi-arrow-left fs-5 font-weight-bold"></i>
                    </Link>
                </div>
                <div className="col-10 mt-2">
                    <h3 className="fw-bold">{profile.firstName} {profile.lastName}</h3>
                    <span className="text-muted">6,114 Tweets</span>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src={`/images/${profile.bannerPicture}`}/>
                <div>
                    <img className="rounded-circle ms-3 position-absolute"
                         width={140} height={140}
                         style={{bottom:"-70px",left:"15px"}}
                         src={`/images/${profile.profilePicture}`}/>
                </div>
            </div>
            <div>
                <Link to="/tuiter/edit-profile" className="float-end rounded-pill text-decoration-none btn border fw-bold mt-3 me-4">
                    Edit profile
                </Link>
            </div>
            <div className="mb-3 ms-3" style={{marginTop:"100px"}}>
                <h4 className="fw-bold mb-0">{profile.firstName} {profile.lastName}</h4>
                <span className="text-muted">{profile.handle}</span>
            </div>
            <div className="ms-3">
                <p>{profile.bio}</p>
            </div>
            <div className="ms-3 mb-2">
                <i className="bi bi-geo-alt text-muted me-3">{profile.location}</i>
                <i className="bi bi-balloon text-muted me-3">{profile.born}</i>
                <span className="me-3 text-muted">{profile.dateOfBirth}</span>
                <i className="bi bi-calendar text-muted">Joined {profile.dateJoined}</i>
            </div>
            <div className="ms-3 mb-3">
                <span className="fw-bold me-2">{profile.followingCount}</span>
                <span className="me-5">Following</span>
                <span className="fw-bold me-2">{profile.followersCount}</span>
                <span>Followers</span>
            </div>
        </div>
    );
};

export default ProfileItem;
