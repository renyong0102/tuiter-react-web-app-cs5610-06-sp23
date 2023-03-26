import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "./profile-reducer";
import {Link} from "react-router-dom";

const EditProfile = () =>{
    const {profile} = useSelector(state => state.profile)
    const [profileInfo, setProfileInfo] = useState(profile);
    const dispatch = useDispatch();
    const handleSaveButton = () => {
        dispatch(updateProfile(profileInfo));
    }
    const handleNameChange = (event) => {
        const name = event.target.value;
        const [firstName, lastName=""] = name.split(" ")
        setProfileInfo({
            ...profileInfo,
            firstName,
            lastName
        });
    }
    return(
        <div className="border">
            <div className="row mb-2 mt-2 ms-2 me-2">
                <div className="col-1">
                    <Link to="/tuiter/profile" className="bi bi-x-lg float-start text-muted mt-1"></Link>
                </div>
                <div className="col-7">
                    <span className="fw-bold fs-5">Edit profile</span>
                </div>
                <div className="col-4">
                    <Link to='/tuiter/profile'
                          className="btn btn-dark fw-bold rounded-pill float-end"
                          onClick={handleSaveButton}>
                        Save
                    </Link>
                </div>
            </div>
            <div className="position-relative">
                <img className="img-fluid" src={`/images/${profile.bannerPicture}`}/>
                <i className="bi"></i>
                <i className="bi"></i>
                <div className="">
                    <img className="rounded-circle ms-3 mb-2 position-absolute"
                         width={140} height={140}
                         style={{bottom:"-70px",left:"15px"}}
                         alt="profile-image"
                         src={`/images/${profile.profilePicture}`}/>
                    {/*<i className="bi bi-camera position-absolute"*/}
                    {/*   style={{left:"15%"}}></i>*/}
                </div>
            </div>

            <div className="border ms-3 mb-4 me-3" style={{marginTop:"100px"}}>
                <label className="text-muted ms-2" for="name">Name</label><br/>
                <input defaultValue={profile.firstName + " " + profile.lastName}
                       className="form-control border-0"
                       id="name"
                       onChange={handleNameChange}/>
            </div>
            <div className="border ms-3 mb-4 me-3">
                <label className="text-muted ms-2" for="bio">Bio</label><br/>
                <textarea defaultValue={profile.bio}
                          className="form-control border-0"
                          id="bio"
                          onChange={(e) =>
                              setProfileInfo({
                                  ...profileInfo,
                                  bio:e.target.value,
                              })}/>
            </div>
            <div className="border ms-3 mb-4 me-3">
                <label className="text-muted ms-2" for="location">Location</label><br/>
                <input defaultValue={profile.location}
                       className="form-control border-0"
                       id="location"
                       onChange={(e) =>
                           setProfileInfo({
                               ...profileInfo,
                               location:e.target.value,
                           })}/>
            </div>
            <div className="border ms-3 mb-4 me-3">
                <label className="text-muted ms-2" for="website">Website</label><br/>
                <input defaultValue={profile.website}
                       className="form-control border-0"
                       id="website"
                       onChange={(e) =>
                           setProfileInfo({
                               ...profileInfo,
                               website:e.target.value,
                           })}/>
            </div>
            <div className="border ms-3 mb-4 me-3">
                <label className="text-muted ms-2" for="dateOfBirth">Birth date &middot;
                    <span className="text-decoration-none text-primary">Edit</span></label><br/>
                <input defaultValue={profile.dateOfBirth}
                       className="form-control border-0"
                       id="dateOfBirth"
                       onChange={(e) =>
                           setProfileInfo({
                               ...profileInfo,
                               dateOfBirth:e.target.value,
                           })}/>
            </div>
            <div className="ms-3 me-3 mb-4">
                Switch to professional
                <i className="bi bi-caret-right float-end"></i>
            </div>
        </div>
    );
};
export default EditProfile;
