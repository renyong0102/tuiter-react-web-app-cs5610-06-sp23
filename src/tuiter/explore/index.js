import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            {/*searching part:*/}
            <div className="row">
                {/*11/12 input-text and search icon*/}
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    {/*<i className="bi bi-search position-absolute translate-middle-y top-50 wd-search-icon text-muted ms-3"></i>*/}
                    <i className="bi bi-search position-absolute d-inline text-muted wd-nudge-search-icon"></i>

                </div>
                {/*1/12 gear icon*/}
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            {/*nav bar*/}
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block">Entertainment</a>
                </li>
            </ul>
            {/*img with its absolute <h1>*/}
            <div className="position-relative mb-2">
                <img src="/images/starship.jpeg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            {/*last part is import from post-summary-list*/}
            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;
