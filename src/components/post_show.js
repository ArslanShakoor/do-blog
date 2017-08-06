import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component{
	componentDidMount(){
		const { id } = this.props.match.params;

		this.props.fetchPost(id);
	}

	onDeleteClick(){
		const { id } = this.props.match.params;
		this.props.deletePost(id, ()=>{
			this.props.history.push('/');
		});
	}


	render(){
		const {post} = this.props;
		if (!post){
			return <div>LOADING.....</div>
		}
		 
		return (

          <div>
            <Link to= "/">Back to Index</Link>
             <button className="btn btn-danger pull-xs-right"
	            onClick={this.onDeleteClick.bind(this)}
	            >
              Delete Post
	         </button>
            <h3>{post.title}</h3>
            <h6>categories: {post.categories}</h6>
            <p>{post.content}</p>
          </div>
		);

	}
}
// own props go to the component it is defined in this case it will go to show component

function  mapStateToProps({ posts }, ownProps){
 // return  { posts }
  return { post: posts[ownProps.match.params.id]};

}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow);


//first create the component
// then action creator in actions directroy
// then create the reducer for the action
// then connect the action creator 
// then create the mapstatetoprose to get the data from state