import { cartConstants } from './constants';
// import { useSelector } from 'react-redux';



export const additem = (item) => {
    return async dispatch => {
        dispatch({
            type:cartConstants.ADD_ITEM,
            payload:{
                item : {
                    ...item,
                    sum:0
                }
            }
        })
    }
}

export const changeQty = (qty) => {
    return async dispatch => {
        dispatch({
            type:cartConstants.CHANGE_QTY,
            payload:qty
        })
    }
}