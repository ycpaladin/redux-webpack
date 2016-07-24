import actionTypes from '../constants/actionTypes'

export function changeEditState(isEdit) {
    return {
        type: actionTypes.CHANGE_EDIT_STATE,
        value: isEdit
    }
}