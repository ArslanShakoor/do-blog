 import _ from 'lodash';
 import React, { Component } from  'react';
 // connect react-redux allow the component to connect with reducer which is our redux state
 import { connect } from 'react-redux';
 import { fetchPosts } from  '../actions';
 import { Link } from 'react-router-dom';


class PostsIndex extends Component{
	//react lifecycle method this allow to perform any action before this component shows on screen
	componentDidMount(){
       this.props.fetchPosts();
	}



	renderPosts(){
		return _.map(this.props.posts, post=>{
			 
			return(
               <li className="list-group-item" key={ post.id }>
                 <Link to={`/posts/${post.id}`}>
                 {post.title}
                 </Link>
               </li>  
            );
		});
	}

	render(){
		return(
			<div>
				<div className="text-xs-right">
				  {/* add a hyper link but in react without relaoding page */}
	              <Link className="btn btn-primary" to = "/posts/new">
	                Add a post
	              </Link>
	              
				</div>
			  {this.renderPosts()}
			</div>
        );
	}
}	


//make the reducer avaialable to component
 
function mapStateToProps({posts}) {
  return { posts };
}


//wireup the coonect with export class
//action creator hocked up to our comnent (null, {fetchPosts})
// {fechPosts} is equal to {fetchPosts: fetchPosts} but es6 allows us to use in this style
export default connect(mapStateToProps, { fetchPosts }) (PostsIndex);  