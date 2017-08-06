import _ from  'lodash';
import { FETCH_POSTS } from '../actions';


export default function(state = {}, action){
	switch (action.type){ 
		case FETCH_POSTS:
		//with lodash  we implement map for iteration and the function below we are making key value pairs
		   return _.mapKeys(action.payload.data, 'id');
		default: 
		  return state;
    }
}



