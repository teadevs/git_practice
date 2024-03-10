import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const loadCommentForSubredditId = createAsyncThunk(
    'Comment/loadCommentForSubredditId',async(subredditId)=>{
        const data = await fetch(`./api/reddit/comment`)
        const json = await data.json();
        return json;
    });

export const postCommentForSubredditId = createAsyncThunk(
    './Comment/postCommentForSubredditId', async(
        {subredditId, comment})=>{
            const requestBody = JSON.stringify({comment: comment});
            const data = await fetch(`./api/reddit/comment`, {
                method: "POST",
                body: JSON.stringify({
                    subredditId: subredditId,
                    comment: commentData
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            const json = await data.json();
            return json;
        });
    });

export const CommentSlice = createSlice({
    name: 'comment',
    initialState:{
        bySubredditId: {},
        isLoadingComment: false,
        failedToLoadComment: false,
        createCommentIsPending: false,
        failedToCreateComment: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(loadCommentForSubredditId.pending, (state) =>{
            state.isLoadingComment = true;
            state.failedToLoadComment = false;
        })
        .addCase(loadCommentForSubredditId.rejected, (state) =>{
            state.isLoadingComment = false;
            state.failedToLoadComment = true;
        })
        .addCase(loadCommentForSubredditId.fulfilled, (state,action) =>{
            state.isLoadingComment = false;
            state.failedToLoadComment = false;
            const { subredditId, comment} = action.payload;
            state.bySubredditId[subredditId]= comment;
        })
        .addCase(postCommentForSubredditId.pending, (state) =>{
            state.createCommentIsPending = true;
            state.failedToCreateComment = false;
        })
        .addCase(postCommentForSubredditId.rejected, (state) =>{
            state.createCommentIsPending = false;
            state.failedToCreateComment = true;
        })
        .addCase(postCommentForSubredditId.fulfilled, (state, action) =>{
            state.createCommentIsPending = false;
            state.failedToCreateComment = false;
            const { subredditId } = action.payload;

            state.bySubredditId[subredditId].push(action.payload);
        });
    }
});

console.log(CommentSlice)

export const selectComment=(state) => state.comment.bySubredditId;
export const isLoadingComment = (state) => state.comment.isLoadingComment;
export const createCommentIsPending = (state) => state.comment.createCommentIsPending;
export default CommentSlice.reducer;