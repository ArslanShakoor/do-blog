import _ from  'lodash';
import { FETCH_POSTS, FETCH_POST } from '../actions';


export default function(state = {}, action){
	switch (action.type){ 
		case FETCH_POST:
		   // ....state get all the data which we already had..
		   

              //es5  is below
           //   const post  = action.payload.data;
		   // const newState = {...state,}
		   // newState[post.id]= post;
		   // return newState;

		      // es6 is below
		    return {...state, [action.payload.data.id]: action.payload.data}  



		case FETCH_POSTS:
		  //with lodash  we implement map for iteration and the function below we are making key value pairs
		  return _.mapKeys(action.payload.data, 'id'); 
		default: 
		  return state;
    }
}



