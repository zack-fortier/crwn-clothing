// Redux reducer for users
const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    // If the action type is set current user, then return that state
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            }
        // If the action type is not from above, then return the initial state
        default: 
            return state;
    }
}
export default userReducer;