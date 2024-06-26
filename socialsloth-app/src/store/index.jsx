import { configureStore, combineReducers } from '@reduxjs/toolkit';


export default configureStore({
  reducer: ({
    reddit: redditReducer ,
    subreddits: subredditReducer,
  }),
});