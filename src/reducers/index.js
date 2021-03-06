import { combineReducers } from 'redux';
import user from './user';
import runtime from './runtime';
import intl from './intl';
import content from './content';
import cities from './cities';

export default combineReducers({
  user,
  runtime,
  intl,
  content,
  cities
});
