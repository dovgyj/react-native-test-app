import { createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import clone from 'clone';
let initialState={
		user:{
			loggedIn:false
		}
	};

export const loginReduser=(state=initialState,action)=>{
	console.log('reduser');
	var newState=clone(state);
	if(action.type=='LOGIN_SUCCESS'){
		console.log('LOGIN_SUCCESS');
        return {
			user:{
				loggedIn:true
			}
		};
    }
	
	return newState;
	
}

export default createStore(loginReduser,initialState,applyMiddleware(thunkMiddleware));