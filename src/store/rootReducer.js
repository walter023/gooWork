import { combineReducers } from 'redux';

import jobReducer from './reducers/job';

export const rootReducer = combineReducers({
  job: jobReducer,
});
