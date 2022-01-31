import { combineReducers } from 'redux';
import bookReducer from './book.reducer';
import cartReducer from './cart.reducer';



const reducer = combineReducers({
    book : bookReducer,
    cart : cartReducer
});

export default reducer;