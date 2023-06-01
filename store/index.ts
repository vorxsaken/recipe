import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './Reducers/recipeReducer'

export default configureStore({
    reducer: {
        recipe: recipeReducer
    }
})