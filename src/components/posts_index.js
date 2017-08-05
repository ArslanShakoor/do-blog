 import _ from 'lodash';
 import React, { Component } from  'react';
 // connect react-redux allow the component to connect with reducer which is our redux state
 import { connect } from 'react-redux';
 import { fetchPosts } from  '../actions';


class PostsIndex extends Component{
	//react lifecycle method this allow to perform any action before this component shows on screen
	componentDidMount(){
       this.props.fetchPosts();
	}

	renderPosts(){
		return _.map(this.props.posts, post=>{
			return(
               <li className="list-group-item" key={ post.id }>
                 {post.title}
               </li>  
            );
		});
	}

	render(){
		return(
			<div>
			  {this.renderPosts()}
			</div>
        );
	}
}	


//make the reducer avaialable to component
 
function mapStateToProps(state) {
  return { posts: state.posts };
}


//wireup the coonect with export class
//action creator hocked up to our comnent (null, {fetchPosts})
// {fechPosts} is equal to {fetchPosts: fetchPosts} but es6 allows us to use in this style
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);  