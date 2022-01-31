import { bookConstants } from "../actions/constants";

const initstate =  {
    books: [],
    book: {},
    loading: false,
    error: null,
    update:null
}

const bookReducer = (state = initstate , action) => {
    switch(action.type){
        case bookConstants.GET_ALL_BOOK_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case bookConstants.GET_ALL_BOOK_SUCCESS:
            state = {
                ...state,
                books: action.payload.books,
                loading: false
            }
            break;
        case bookConstants.GET_ALL_BOOK_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case bookConstants.GET_A_BOOK_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case bookConstants.GET_A_BOOK_SUCCESS:
            state = {
                ...state,
                book: action.payload.book,
                loading: false
            }
            break;
        case bookConstants.GET_A_BOOK_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
        case bookConstants.UPDATE_BOOK_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case bookConstants.UPDATE_BOOK_SUCCESS:
            state = {
                ...state,
                loading: false,
                update: action.payload.update
            }
            break;
        case bookConstants.UPDATE_BOOK_FAILURE:
            state = {
                ...state,
                error:action.payload
            }
            break;
        case bookConstants.DELETE_BOOK_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case bookConstants.DELETE_BOOK_SUCCESS:
            state = {
                ...state,
                loading: false,
                delete: action.payload.delete
            }
            break;
        case bookConstants.DELETE_BOOK_FAILURE:
            state = {
                ...state,
                error:action.payload
            }
            break;
        case bookConstants.ADD_NEW_BOOK_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case bookConstants.ADD_NEW_BOOK_SUCCESS:
            state = {
                ...state,
                loading: false,
                added : action.payload
            }
            break;
        case bookConstants.ADD_NEW_BOOK_FAILURE:
            state = {
                ...initstate,
                error:action.payload
            }
            break;
        default:
            // 
    }
    return state;
}

export default bookReducer;