import { configureStore } from '@reduxjs/toolkit'
import githubReducer from '../Slices/AccountSlice'


export const store= configureStore({
    reducer:{
        github : githubReducer,
    }
})