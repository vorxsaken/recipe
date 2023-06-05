import { createSlice, createEntityAdapter, createAsyncThunk } from "@reduxjs/toolkit";

const recipeAdapter = createEntityAdapter();

const initialState = recipeAdapter.getInitialState({
    status: 'idle',
    error: '',
    skip: 0
})

export const getInitialRecipe = createAsyncThunk('recipe/fetchRecipe', async () => {
    const response = await fetch('http://localhost:3000/api/recipe/read', {
        method: 'POST',
        body: JSON.stringify({
            skip: 0
        })
    })
    const recipe = await response.json();
    return recipe;
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addRecipe: recipeAdapter.addOne,
        updateRecipe: recipeAdapter.updateOne
    },
    extraReducers(builder) {
        builder
            .addCase(getInitialRecipe.pending, (state, actions) => {
                state.status = 'loading'
            })
            .addCase(getInitialRecipe.fulfilled, (state, actions) => {
                state.status = 'success'
                console.log(state)
                recipeAdapter.upsertMany(state, actions.payload)
            })
            .addCase(getInitialRecipe.rejected, (state, actions) => {
                state.status = 'error'
                state.error = actions?.error?.message || ''
            })
    }
})

export default recipeSlice.reducer

export const { addRecipe, updateRecipe} = recipeSlice.actions

export const selectAllRecentRecipe = recipeAdapter.getSelectors((state: any) => state.recipe)