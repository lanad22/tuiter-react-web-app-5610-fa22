import React from "react";
import profiles from "../reducers/profile-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import Profiles from "./profile-component";

const store = configureStore({
    reducer: {profiles}
});

const ProfileComponent = () => {
    return(
        <Provider store={store}>
            <div>
                <Profiles/>
            </div>
        </Provider>
    );
};
export default ProfileComponent;