import React from "react";
import {useSelector} from "react-redux";
import ProfileItem from "./profile-item";

const Profiles = () => {
    const profiles = useSelector(state => state.profiles);
    return(
        <ul className="list-group">
            {
                profiles.map(profile =>
                    <ProfileItem
                        key={profile._id} profile={profile}/>
                )
            }
        </ul>
    );
};
export default Profiles;