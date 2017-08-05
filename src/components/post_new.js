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
            {field.meta.error}
          </div>
        );
	}
	onSubmit(values){
		console.log(values);
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
})(PostNew)