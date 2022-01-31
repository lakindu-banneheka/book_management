import {applyMiddleware, createStore} from 'redux';
import reducer from '../reducer/reducer';
import thunk from 'redux-thunk'

const store = createStore(reducer , applyMiddleware(thunk));


export default store;





// middleware in store ?
// The most common use case for middleware is to support asynchronous actions without much boilerplate code or a dependency on a library like Rx. 
// It does so by letting you dispatch async actions in addition to normal actions.