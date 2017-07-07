impoer _ from 'lodash';
import { FETCH_POSTS } from '../actions'; // will import from the index file

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}