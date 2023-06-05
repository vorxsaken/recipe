import { configureStore } from '@reduxjs/toolkit'
import recipeReducer from './Reducers/recipeReducer'
import userReducer from './Reducers/userReducer'

export default configureStore({
    reducer: {
        recipe: recipeReducer,
        user: userReducer
    }
})