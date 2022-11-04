import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import '../profile/index.css';

const EditProfileItem = () => {
    let profile =
        useSelector(state => state.profile[0]);
    const [name, setname] = useState(profile.name);
    const [bio, setBio] = useState(profile.bio);
    const [location, setLocation] = useState(profile.location);
    const [website, setWebsite] = useState(profile.website);
    const [dateOfBirth, setdateOfBirth] = useState(profile.dateOfBirth);
    const [beingEdited, setBeingEdited] = useState(null);
    const dispatch = useDispatch();
    const editProfileClickHandler = () => {
        dispatch({
            type: 'edit',
            name: name,
            bio: bio,
            location: location,
            website: website,
            dateOfBirth: dateOfBirth
        });
    }
    return (
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
                        onClick={editProfileClickHandler()}
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
                               defaultValue={profile.name}
                               onChange={(event) => setname(event.target.value)}/>
                    </li>
                </ul>
                <ul className='list-group pt-4'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Bio</label>
                        <textarea
                            className='form-control border-0 p-0'
                            defaultValue={profile.bio}
                            onChange={(event) => setBio(event.target.value)}>
                        </textarea>
                    </li>
                </ul>
                <ul className='list-group pt-4'>
                    <li className='list-group-item'>
                        <label className='text-secondary'>Location</label>
                        <input
                            className='form-control border-0 p-0'
                            defaultValue={profile.location}
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
                        profile.dateOfBirth !== beingEdited &&
                        <button
                            onClick={() => setBeingEdited(profile.dateOfBirth)}>
                            <span style={{color:'blue'}}>Edit</span>
                        </button>
                    }
                    {
                        profile.dateOfBirth === beingEdited &&
                        <button
                            onClick={() => setBeingEdited(null)}>
                            Done
                        </button>
                    }
                    {
                        profile.dateOfBirth !== beingEdited &&
                        <div>{profile.dateOfBirth}</div>
                    }

                    {
                        profile.dateOfBirth === beingEdited &&
                            <div>
                                <input
                                    type = 'date'
                                    className='form p-2'
                                    value = {profile.dateOfBirth}

                                    onChange={(event) => setdateOfBirth(event.target.value)}/>
                            </div>
                    }
                </li>
            </div>
        </>
    );
};
export default EditProfileItem;