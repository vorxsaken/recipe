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
        collections: [],
        recipes: [],
        recipeSkip: 0,
        isUserInfoFetched: false
    },
    reducers: {
        setUser(state, actions) {
            state.userInfo = actions.payload;
        },
        mergeRecipes(state, actions) {
            state.recipes = state.recipes.concat(actions.payload);
            state.recipeSkip += 10;
        },
        resetCollection(state, actions) {
            state.collections = actions.payload.collections;
        }
    },
    extraReducers(builder) {
        builder.addCase(getUserInfo.fulfilled, (state, actions) => {
            state.userInfo = actions.payload;
            state.collections = actions.payload.collections;
            state.isUserInfoFetched = true;
        })
    }
})

export const { resetCollection, mergeRecipes, setUser } = userSlice.actions;
export default userSlice.reducer
