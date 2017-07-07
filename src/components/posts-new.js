import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

// component PostsNew
class PostsNew extends Component {
  // helper function
  renderField(field) {
    // need to wire up to JSX
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input} // saves having to add onChange, onBlur, onFocus etc
        />
        {field.meta.error}
      </div>
    );
  }

  onSubmit(values) {
    // this === component
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="categories"
          component={this.renderField}
          label="Categories"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

// helper function
function validate(values) {
  // console.log(values) -> { title: 'asdf', categories: 'asdf', content: 'asdf' }
  const errors = {};

  // Validate the inputs from 'values'
  if (!values.title || values.title.length < 3) {
    // corresponds with name="title" - name properties consistently
    errors.title = "Enter a title that is at least 3 characters";
  }
  // can break out into multiple if statements if wanted
  if (!values.categories) {
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }

  // If errors is empty, the form is fine to submit
  // If error has any properties, redux form assumes form is invalid
  return errors;
}

// helper allowing redux form to communicate from component to the reducer
export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);

// string assigned to form property must be unique
// validate: validate