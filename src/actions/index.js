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


export function deleteItem(item) {
    return {
        type: actionTypes.DELETE_ITEM,
        value: item
    }
}
