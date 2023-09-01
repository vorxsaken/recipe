import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const recipeAdapter = createEntityAdapter();

const initialState = recipeAdapter.getInitialState({
    status: 'idle',
    error: '',
    endPage: 30,
    skip: 0
})

const recipeSlice = createSlice({
    name: 'recipes',
    initialState,
    reducers: {
        addMultiple(state, actions) {
            recipeAdapter.addMany(state, actions.payload);
            state.skip = state.skip + 30;
        },
        emptyRecipe: recipeAdapter.removeAll,
        removeRecipe(state, actions){
            recipeAdapter.removeOne(state, actions.payload);
        },
        addRecipe: recipeAdapter.addOne,
        updateRecipe: recipeAdapter.updateOne
    }
})

export default recipeSlice.reducer

export const { selectAll } = recipeAdapter.getSelectors((state: any) => state.recipe);
export const { addMultiple, addRecipe, updateRecipe, emptyRecipe, removeRecipe} = recipeSlice.actions

export const selectAllRecentRecipe = recipeAdapter.getSelectors((state: any) => state.recipe)