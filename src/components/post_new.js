 import React,{Component} from 'react';
 import {Field, reduxForm} from 'redux-form'

class PostNew extends Component{
	renderField(field){
		return(
          <div className="form-group">
           <label>{field.label}</label>
            <input
               className="form-control"
              {...field.input}
            />
          </div>
        );
	}
	 

	render(){
		return (

			<div>
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
			</div>

		);
	}

	
}

function validate(values){
	const errors = {

		//validate the inputs from values 	
		if(!values.title ){
			errors.title = "Enter a title"
		}

		if(!values.categories){
			errors.title = "Enter a category"
		}

		if(!values.description){
			errors.title = "Enter a description of post"
		}


		//vaildate the input values

		//if error is empty the form is fine to submit otherwise form is invalid
	}

}

export default reduxForm({
	validate,
	form: 'PostsNewForm'
})(PostNew)