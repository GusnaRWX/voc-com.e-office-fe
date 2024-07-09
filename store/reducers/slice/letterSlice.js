import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    page: 1,
    itemPerPage: 10,
    data: [],
    itemTotals: 0,
    detail: {}
}

export const letterSlice = createSlice({
    name: 'letter',
    initialState,
    reducers: {
        getLetterRequested: (state, action) => {
            state.loading = true
            state.page = action.payload?.page
            state.itemPerPage = action.payload?.itemPerPage
        },
        getLetterSuccess: (state, action) => {
            state.loading = false
            state.data = action?.payload?.data?.items.map((item, key) => {
                return {
                    seq: ((state.page - 1) * state.itemPerPage) + key + 1,
                    ...item
                }
            })
            state.itemTotals = action?.payload?.data.itemTotals
        },
        getLetterFailed: (state) => {
            state.loading = false
        },
        postLetterRequested: (state) => {
            state.loading = true
        },
        postLetterSuccess: (state) => {
            state.loading = false
        },
        postLetterFailed: (state) => {
            state.loading = false
        },
        getLetterByIdRequested: (state) => {
            state.loading = true
        },
        getLetterByIdSuccess: (state, action) => {
            state.loading = false
            state.detail = action?.payload
        },
        getLetterByIdFailed: (state) => {
            state.loading = false
        }
    }
})

export const {
    getLetterRequested,
    getLetterSuccess,
    getLetterFailed,
    postLetterRequested,
    postLetterSuccess,
    postLetterFailed
} = letterSlice.actions

export default letterSlice.reducer