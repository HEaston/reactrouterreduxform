import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  // react lifecycle method 'componentDidMount', will be called automatically by react
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Posts Index
      </div>
    );
  }
}

// we're using shorthand here instead of using mapDispatchToProps
// connect is taking care of this for us here
export default connect(null, { fetchPosts })(PostsIndex);