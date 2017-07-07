import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

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
      </div>
    );
  }

  render() {
    return (
      <form>
        <Field
          name="title"
          component={this.renderField}
          label="Title"
        />
        <Field
          name="tags"
          component={this.renderField}
          label="Tags"
        />
        <Field
          name="content"
          component={this.renderField}
          label="Post Content"
        />
      </form>
    );
  }
}

// helper allowing redux form to communicate from component to the reducer
export default reduxForm({
  form: 'PostsNewForm'
})(PostsNew);

// string assigned to form property must be unique