import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
// 通过返回值 来推导类型  ReturnType

export type RootState = ReturnType<typeof store.getState> 
export default store;