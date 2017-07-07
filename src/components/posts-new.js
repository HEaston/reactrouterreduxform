import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  // helper function
  renderTitleField(field) {
    // need to wire up to JSX
    return (
      <div>
        <input
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
          component={this.renderTitleField}
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