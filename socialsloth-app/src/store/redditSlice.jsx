import { createSlice, createSelector } from '@reduxjs/toolkit';
import { getSubredditPosts, getComments } from '../api/reddit';

const initialState = {
    posts: [],
    error: false,
    isLoading: false,
    searchTerm: '',
    selectedSubreddit: 'r/wholesome',
};

const redditSlice = createSlice({
    name: 'selectedPosts',
    initialState,
    reducers: {
        setPosts(state,action){
            state.posts = action.payload;
        },
        startGetPosts(state){
            state.isLoading = true;
            state.error= false;
        },
        getPostsSucess(state,action){
            state.isloading = false;
            state.posts = action.payload;
        },
        getPostsFailed(state) {
            state.isLoading = false;
            state.error = true;
        },
        setSearchQuery(state, action){
            state.searchQuery = action.payload;
        },
        setSelectedSubreddit(state, action){
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
        },
        
    }

})


export const redditPost = (redditToAdd) => {
    return {
        type: 'reddit/redditPost',
        payload: 'redditToAdd',
    };
};

