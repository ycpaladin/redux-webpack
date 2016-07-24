import {combineReducers} from 'redux'
import items from './items'
import itemState from './item'

const rootReducer = combineReducers({
    items,
    itemState
})

export default rootReducer