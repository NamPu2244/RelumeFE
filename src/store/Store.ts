import { configureStore } from "@reduxjs/toolkit";
import dataSlice from '../reducer/Reducer'

export default configureStore({
    reducer: {
        news:dataSlice
    }
})