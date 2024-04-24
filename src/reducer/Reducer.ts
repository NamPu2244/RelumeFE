import { createSlice , current } from "@reduxjs/toolkit";

const initialState = {
    news:[]
}

const dataSlice = createSlice({
    name:'newsListing',
    initialState,
    reducers:{
        addNews: (state, action) => {
            state.news = action.payload
            // console.log(current(state))
        }
    }
})


export const {addNews} = dataSlice.actions
export default dataSlice.reducer