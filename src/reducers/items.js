import Immutable from 'immutable'
import actionTypes from '../constants/actionTypes'

const initialItems =
    {
        allComplete: false,
        items: Immutable.List([
            { text: 'kevin' },
            { text: 'lxy' },
            { text: 'ccw' }
        ])
    };


function assign(item, newValue) {
    return Object.assign({}, item, newValue);
}


function checkAllComplete(items) {
    var result = items.filter((item, index) => item.complete == true);
    return result.size == items.size
}

export default function items(state = initialItems, action) {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            return assign(state, { items: state.items.push({ text: action.value }) })
        case actionTypes.DELETE_ITEM:
            return assign(state, { items: state.items.delete(action.index) })
        case actionTypes.UPDATE_ITEM:
            return assign(state, { items: state.items.set(action.index, { text: action.newValue }) })
        case actionTypes.DELETE_ALL:
            return assign(state, { items: state.items.clear() });
        case actionTypes.CHANGE_EDIT_STATE:
            var item = assign(state.items.get(action.index), { isEditing: action.isEditing })
            return assign(state, { items: state.items.set(action.index, item) })
        case actionTypes.CURRENT_COMPLETED_STATE:
            var item = assign(state.items.get(action.index), { complete: action.isCompleted })
            var result = assign(state, { items: state.items.set(action.index, item) })
            result.allComplete = checkAllComplete(result.items);
            return result;
        case actionTypes.SET_ALL_CHECKED:
            var allItems = state.items.map((item, index) => assign(item, { complete: action.isCompleted }))
            return {
                allComplete: action.isCompleted,
                items: allItems
            };
        case actionTypes.DESTORY_COMPLETED:
            if (action.indexAsArray.length) {
                var items = state.items;
                var array = action.indexAsArray.reverse();
                for (var i = 0; i < array.length; i++) {
                    items = items.delete(array[i]);
                }
                return assign(state, { items: items });;
            } else {
                return state;
            }
        default:
            return state;
    }
}