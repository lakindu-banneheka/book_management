import axiosInstance from '../Healpers/axios';
import { api } from '../urlConfig'
import { bookConstants } from './constants';


export const getAllBook = () => {
    return async dispatch => {
        const res = await axiosInstance.get(`getallbooks`);
        dispatch({ type : bookConstants.GET_ALL_BOOK_REQUEST })
        if(res.status === 200 ){
            const { bookList } = res.data;
            dispatch({
                type:bookConstants.GET_ALL_BOOK_SUCCESS,
                payload:{
                    books : bookList
                }
            })
        } else {
            dispatch({
                type:bookConstants.GET_ALL_BOOK_FAILURE,
                payload:{
                    error:res.data.error
                }
            })
        }
    }
}


export const getABook = (book_id) => {
    return async dispatch => {
        const res = await axiosInstance.get(`${api}/getbook/${book_id}`);
        dispatch({ type:bookConstants.GET_A_BOOK_REQUEST });
        if(res.status === 200 ){
            const book = res.data;
            dispatch({
                type : bookConstants.GET_A_BOOK_SUCCESS,
                payload : {
                    book : book
                }
            })
        } else {
            dispatch({ 
                type : bookConstants.GET_A_BOOK_FAILURE,
                payload : {
                    error : res.data.error
                }
             })
        }
    }
}

export const updateBook = (form,id) => {
    return async(dispatch) => {
        dispatch({ type : bookConstants.UPDATE_BOOK_REQUEST });
        const res = await axiosInstance.post(`${api}/update/${id}` , form);
        if(res.status === 201){
            dispatch({
                type:bookConstants.UPDATE_BOOK_SUCCESS,
                payload: { update:res.data}
            });
        }
        if(res.status === 400){
            dispatch({
                type:bookConstants.UPDATE_BOOK_FAILURE,
                payload: res.data.error
            });
        }
    }
}

export const deleteBook = (id) => {
    return async(dispatch) => {
        dispatch({ type: bookConstants.DELETE_BOOK_REQUEST });
        const res = await axiosInstance.delete(`${api}/delete/${id}`);
        console.log(`${api}/delete/${id}`,'del action')
        if(res.status === 204){
            dispatch({
                type:bookConstants.DELETE_BOOK_SUCCESS,
                payload: {
                    delete : res.data
                }
            })
        }
        if(res.status === 400){
            dispatch({
                type:bookConstants.DELETE_BOOK_FAILURE,
                payload: res.data.error
            });
        } 
    }
}

export const addBook = (form) => {
    return async(dispatch) => {
        dispatch({ type : bookConstants.ADD_NEW_BOOK_REQUEST });
        const res = await axiosInstance.post(`${api}/addBook` , form);
        if(res.status === 201){
            dispatch({
                type:bookConstants.ADD_NEW_BOOK_SUCCESS,
                payload: {book:res.data.book}
            });
        }
        if(res.status === 400){
            dispatch({
                type:bookConstants.ADD_NEW_BOOK_FAILURE,
                payload: res.data.error
            });
        }
    }
}

// export const addCategory = (form) => {
//     return async(dispatch) => {
//         dispatch({ type:categoryConstants.ADD_NEW_CATEGORY_REQUEST });
//         const res = await axiosInstance.post(`/category/create`, form);
//         if(res.status === 201){
//             dispatch({
//                 type:categoryConstants.ADD_NEW_CATEGORY_SUCCESS,
//                 payload: res.data.category
//             });
//         }
//         if(res.status === 400){
//             dispatch({
//                 type:categoryConstants.ADD_NEW_CATEGORY_FAILURE,
//                 payload: res.data.error
//             });
//         }
//     }
// }
