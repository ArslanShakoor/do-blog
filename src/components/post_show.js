import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions'

class PostShow extends Component{
	componentDidMount(){
		const { id } = this.props.match.params.id;
		this.props.fetchPost(id);
	}

	render(){
		this.props === ownProps
		return (

          <div>
            Post Show
          </div>
		);

	};
}
// own props go to the component it is defined in this case it will go to show component

function  mapStateToProps( { posts }, ownProps){
 // return  { posts }
  return { post: posts[ownProps.match.params.id]};

}

export default connect(mapStateToprops, { fetchPost })(PostShow)


//first create the component
// then action creator in actions directroy
// then create the reducer for the action
// then connect the action creator 
// then create the mapstatetoprose to get the data from state