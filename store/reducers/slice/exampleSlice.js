import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    data: []
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers: {
        getExampleRequested (state) {
            state.loading = true
        },
        getExampleSuccess (state) {
            state.loading = false
        },
        getExampleFailed (state) {
            state.loading = false
        }
    }
})

export const {
    getExampleFailed,
    getExampleRequested,
    getExampleSuccess
} = exampleSlice.actions

export default exampleSlice.reducer