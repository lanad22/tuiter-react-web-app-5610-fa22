import React from "react";
import './index.css';
import {Link} from "react-router-dom";

const ProfileItem = ({profile = {}}) => {
    return(
        <li className="list-group-item p-0 text">
            <div class='row ps-3 pt-2'>
                <div className= 'col-1 p-3'>
                    <Link to="/tuiter">
                        <i className="fa fa-arrow-left"
                        style={{color: 'black'}}></i>
                    </Link>
                </div>
                <div className = 'col-11'>
                    <h5 className='fw-bold'>
                        {profile.name}
                    </h5>
                    <span className= 'text-secondary'>{profile.tweets} Tweets</span>
                </div>
            </div>
            <img src={`/images/${profile.banner}`} className="wd-banner" alt="..."/>
            <div class='row pt-2 pe-4'>
                <div class='col-2'>
                    <img src={`/images/${profile.picture}`} width = {130} className="rounded-circle wd-profile-image" alt="..."/>
                </div>
                <div class='col-10 p-0'>
                    <Link to='/tuiter/edit-profile'>
                        <button className = 'btn btn-primary override-bs fw-bold rounded-pill float-end'>
                            Edit profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className='ps-3 pt-3'>
                <h5 className='fw-bold'>{profile.name}</h5>
                <span className='text-secondary'>{profile.handle}</span>
            </div>
            <div className='ps-3 pt-2'>
                {profile.bio}
            </div>
            <div className='row ps-3 pt-3 text-secondary'>
                <div className="col-3">
                    <i className="bi bi-geo-alt pe-1"></i>
                    {profile.location}
                </div>
                <div className="col-4">
                    <i className="bi bi-balloon pe-1"></i>
                    Born {profile.dateOfBirth}
                </div>
                <div className="col-5">
                    <i className="bi bi-calendar3 pe-1"></i>
                    Joined {profile.dateJoined}
                </div>
            </div>
            <div className='row ps-3 pt-3 text-secondary'>
                <div className='col-3'>
                    <span className='fw-bold'>{profile.followingCount}</span>&nbsp;&nbsp;following
                </div>
                <div className='col-3'>
                    <span className='fw-bold'>{profile.followersCount}</span>&nbsp;&nbsp;followers
                </div>
            </div>
        </li>
    );
};
export default ProfileItem;
