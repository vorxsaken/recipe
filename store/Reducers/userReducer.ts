import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getUserInfo = createAsyncThunk('user/fetchUserInfo', async (userId: string, { getState }) => {
        const response = await fetch(`http://localhost:3000/api/user/read/${userId}`);
        const result = await response.json();
        return result;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userInfo: {
            id: ''
        },
        isUserInfoFetched: false
    },
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getUserInfo.fulfilled, (state, actions) => {
            state.userInfo = actions.payload;
            state.isUserInfoFetched = true
        })
    }
})

export default userSlice.reducer
