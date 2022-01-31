import { cartConstants } from "../actions/constants";

const initstate =  {
    items:[],
    // loading:false,
    error:null
}

const cartReducer = (state = initstate , action) => {
    switch(action.type){
        // case cartConstants.ADD_ITEM_REQUEST:
        //     state = {
        //         ...state,
        //         loading: true,
        //     }
        //     break;
        case cartConstants.ADD_ITEM:
            state = {
                ...state,
                items: [...state.items, action.payload.item],
            }
            break;
        case cartConstants.CHANGE_QTY:
            state = {
                ...state,
                // items: state.items.map(i => i.id === action.payload.id ? {...i, qty : action.payload.qty}  : {...i} ) 
            }
            console.log(state.items.map(i => i.id) , 'id')
            // console.log(state.items.map(i => i.id === action.payload.id ? {...i, qty : action.payload.qty}  : {...i} )[0])

            break;
        
        default:
            // 
    }
    return state;
}

export default cartReducer;