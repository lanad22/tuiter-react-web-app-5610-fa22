import profile from "../data/profile.json";

const profileReducer = (state = profile, action) => {
    switch (action.type) {
        case 'edit':
            state[0].name = action.name;
            state[0].bio = action.bio;
            state[0].location = action.location;
            state[0].website = action.website;
            state[0].dateOfBirth = action.dateOfBirth;
            return state;

        default:
            return state;
    }
}


export default profileReducer;