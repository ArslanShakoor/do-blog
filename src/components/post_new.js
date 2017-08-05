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
			      name = "description"
			      component = {this.renderField}
			   />  
			</div>

		);
	}

	
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostNew)