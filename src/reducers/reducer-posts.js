import _ from 'lodash';
import { FETCH_POSTS } from '../actions'; // will import from the index file
import { FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:;
      // ES5 version
      //const post = action.payload.data;
      //const newState = { ...state };
      //newState[post.id] = post;
      //return newState;

      // ES6 cleaned version
      return { ...state, [action.payload.data.id]: action.payload.data };
      // [KEY]: VALUE
      //
      // ...state means take all the existing posts we have from the state
      // object and put them into new object we're about to return
    case FETCH_POSTS:
      // console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}