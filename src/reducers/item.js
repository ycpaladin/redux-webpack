import actionTypes from '../constants/actionTypes'


export default function itemEditState(state = false, action) {
    switch (action.type) {
        case actionTypes.CHANGE_EDIT_STATE:
            state = action.value;
            return state;
        default:
            return state;
    }
}