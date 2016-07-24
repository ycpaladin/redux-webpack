// //定义一个change方法，将来把它绑定到props上
// export function change(value){
//     return{
//         type:"change",
//         value:value
//     }
// }
import actionTypes from '../constants/actionTypes'

export function addItem(item) {
    return {
        type: actionTypes.ADD_ITEM,
        value: item
    }
}


export function deleteItem(index) {
    return {
        type: actionTypes.DELETE_ITEM,
        index: index
    }
}




export function updateItem(id, text) {
    return {
        type: actionTypes.UPDATE_ITEM,
        value: {
            index: id,
            newValue: text
        }

    }
}

// export function create(text) {
//     return {
//         type: actionTypes.TODO_CREATE,
//         text: text
//     }
// }


// export function name(params) {

// }