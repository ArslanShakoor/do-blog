 import React,{Component} from 'react';
 import {Field, reduxForm} from 'redux-form';
 import { Link } from 'react-router-dom';
 // to connect action creator with post 
 import { connect } from 'react-redux';
 // import the action creator
 import { createPost } from '../actions';

class PostNew extends Component{
	renderField(field){


		//remove the field infront of meta and remove meta which are behind touched and error
		const { meta : {touched, error} } = field;

		const  className=`form-group ${touched && error ? 'has-danger' : ''}`
		return(
          <div className={className}>
           <label>{field.label}</label>
            <input
               className="form-control"
              {...field.input}
            />
{/* anything before the question mark evaludated if it is true and query 
after the question mark run other wise run after colon */} 
           <div className="text-help">
            {touched ?  error : ''}
           </div> 
          </div>

        );
	}
	onSubmit(values){
	 
		this.props.createPost(values,()=>{
			//add the call back fundtion
			this.props.history.push('/');
		});
	}
	 

	render(){
		const { handleSubmit } = this.props;

		return (
//handle submit asked to run the redux form to chech validation and all  and if it  is valid than run our this.onSubmit
			<form onSubmit = {handleSubmit(this.onSubmit.bind(this))}>
			   <Field
			      label = "Title"
			      name = "title"
			      component = {this.renderField}
			   /> 
			   <Field
			      label = "Categories"
			      name = "categories"
			      component = {this.renderField}
			   />  
			    <Field
			      label = "Description of post"
			      name = "content"
			      component = {this.renderField}
			   /> 
			   <button type="submit" className= "btn btn-primary"> Submit </button> 
			   <Link to="/" className = "btn btn-danger"> cancel </Link>
			    
			</form>

		);
	}

	
}

function validate(values){
	const errors = {}

		//validate the inputs from values 	
		if(!values.title ){
			errors.title = "Enter a title";
		}

		if(!values.categories){
			errors.categories = "Enter a category";
		}

		if(!values.content){
			errors.content = "Enter a description of post";
		}


		//vaildate the input values

		//if error is empty the form is fine to submit otherwise form is invalid
		return errors;

}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(
connect(null,{ createPost })(PostNew)
);