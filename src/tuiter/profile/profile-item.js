import React from "react";
import {useSelector} from "react-redux";

const ProfileItem = () => {
    const {profile} = useSelector(state => state.profile)
    return(
        <div>
            <div>
                <img className="w-100 h-25" src={`/images/${profile.bannerPicture}`}/>
            </div>
            <div>
                <img className="float-start rounded-circle w-25" src={`/images/${profile.profilePicture}`}/>
                <button className="float-end rounded-pill text-decoration-none btn btn-light">Edit profile</button>
            </div>
            <div>
                <span className="fw-bold">{profile.firstName}</span>
                <span className="fw-bold">{profile.lastName}</span><br/>
                <span className="text-muted">{profile.handle}</span>
            </div>
            <div>
                <p>{profile.bio}</p>
            </div>
            <div>
                <i className="bi bi-geo-alt text-muted me-3">{profile.location}</i>
                <i className="bi bi-balloon text-muted me-3">{profile.born}</i>
                <span className="me-3 text-muted">{profile.dateOfBirth}</span>
                <i className="bi bi-calendar text-muted">Joined {profile.dateJoined}</i>
            </div>
            <div>
                <span className="fw-bold me-2">{profile.followingCount}</span>
                <span className="me-5">Following</span>
                <span className="fw-bold me-2">{profile.followersCount}</span>
                <span>Followers</span>
            </div>
        </div>
    );
};

export default ProfileItem;
