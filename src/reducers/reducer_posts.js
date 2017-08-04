import { FETCH_POSTS } from '../actions/';


export default function(state={}, action){
	switch (action.type){ 
		case FETCH_POSTS:
		   cosole.log(action.payload.data);
		default: 
		  return state;
    }
}