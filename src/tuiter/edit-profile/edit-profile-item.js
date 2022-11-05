import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import '../profile/index.css';

const EditProfileItem = () => {
    const profile = useSelector((state) => state.profile);
    const dispatch = useDispatch();

    const [name, setName] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setDOB] = useState(profile.dateOfBirth);

    const [beingEdited, setBeingEdited] = useState(null);

    const editProfile = () => {
        dispatch({
            type: 'edit-profile',
            newName: name,
            newBio: bio,
            newLocation: location,
            newWebsite: website,
            newdateOfBirth: dateOfBirth
        });
    }
    return(
        <>
            <div className = 'row p-2'>
                <div className = 'float-start col-1'>
                    <Link to='/tuiter/profile'>
                        <i className = 'fas fa-times icon' style={{color:'black'}}/>
                    </Link>
                </div>
                <div className='col-5 text-black fw-bold'>
                    Edit Profile
                </div>
                <div className = 'col-6'>
                    <Link
                        className='btn rounded-pill bg-black float-end text-white fw-bold'
                        to='/tuiter/profile'
                        onClick={editProfile}
                    > Save
                    </Link>
                </div>
            </div>
            <img src={`/images/${profile.banner}`} className="pt-2 w-100 wd-banner" alt="..."/>
            <div className = 'row'>
                <div className = 'col-2'>
                    <img src={`/images/${profile.picture}`} width = {130} className="rounded-circle wd-profile-image" alt="..."/>
                </div>
            </div>
            <div className = 'pt-3'>
                <ul className='list-group'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Name</label>
                        <input
                            className='form-control border-0 p-0'
                            value={name}
                            onChange={(event) => setName(event.target.value)}/>
                    </li>
                </ul>
                <ul className='list-group pt-4'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Bio</label>
                        <textarea
                            className='form-control border-0 p-0'
                            value={bio}
                            onChange={(event) => setBio(event.target.value)}>
                        </textarea>
                    </li>
                </ul>
                <ul className='list-group pt-4'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Location</label>
                        <input
                            className='form-control border-0 p-0'
                            value={location}
                            onChange={(event) => setLocation(event.target.value)}/>
                    </li>
                </ul>
                <ul className='list-group pt-4'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Website</label>
                        <input
                            className='form-control border-0 p-0'
                            onChange={(event) => setWebsite(event.target.value)}/>
                    </li>
                </ul>
                <li className='list-group-item pt-4 pb-4'>
                    <label className='pe-2 text-secondary'>Birth date . </label>
                    {
                        dateOfBirth !== beingEdited &&
                        <button
                            onClick={() => setBeingEdited(dateOfBirth)}>
                            <span style={{color:'blue'}}>Edit</span>
                        </button>
                    }
                    {
                        dateOfBirth === beingEdited &&
                        <button
                            onClick={() => setBeingEdited(null)}>
                            Done
                        </button>
                    }
                    {
                        dateOfBirth !== beingEdited &&
                        <div>{dateOfBirth}</div>
                    }

                    {
                        dateOfBirth === beingEdited &&
                        <div>
                            <input
                                type='date'
                                className='form p-2'
                                value = {dateOfBirth}
                                onChange={(event) => setDOB(event.target.value)}/>
                        </div>
                    }
                </li>
            </div>
        </>
);
};

export default EditProfileItem;
