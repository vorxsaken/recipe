import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    comment: [],
    recentComment: [],
    status: 'loading'
}

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        setComments(state, actions) {
            state.status = 'loading';
            state.comment = actions.payload;
            state.status = 'fullfilled'
        },
        putComment(state, actions){
            const currentComment: any[] = state.comment;
            currentComment.unshift(actions.payload)
        },
        putReply(state, actions) {
            const currentComment: any[] = state.comment;
            currentComment.forEach((comment: any) => {
                if(comment.id === actions.payload.commentId) {
                    comment.reply.push(actions.payload);
                }
            })
        },
        putRecentComment(state, actions) {
            const currentRecentComment: any[] = state.recentComment;
            currentRecentComment.push(actions.payload);
        }
    }
})

export default commentsSlice.reducer;

export const { setComments, putComment, putReply, putRecentComment } = commentsSlice.actions