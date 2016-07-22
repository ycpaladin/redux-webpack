import Immutable from 'immutable'
import actionTypes from '../constants/actionTypes'

const initialItems = Immutable.List([1, 2, 3]);

export default function items(state = initialItems, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return state.push(action.value);
        case actionTypes.DELETE_ITEM:
            return state.delete(state.indexOf(action.value))
        case actionTypes.DELETE_ALL:
            return state.clear();
        default:
            return state;
    }
}