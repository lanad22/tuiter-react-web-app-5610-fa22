import profile from "../data/profile.json";

const profileReducers = (state = profile, action) => {
    switch (action.type) {
        case 'edit-profile':
            return {
                _id: (new Date()).getTime() + '',
                ...state,
                name: action.newName,
                bio: action.newBio,
                location: action.newLocation,
                website: action.newWebsite,
                dateOfBirth: action.newdateOfBirth,
            }

        default:
            return state;
    }
};
export default profileReducers;