import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  // react lifecycle method 'componentDidMount', will be called automatically by react
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // using lodash's map
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

// we're using shorthand here instead of using mapDispatchToProps
// 'connect' is taking care of this for us here
export default connect(mapStateToProps, { fetchPosts })(PostsIndex);