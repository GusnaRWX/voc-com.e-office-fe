import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    code: 0,
    message: null
}

export const responseSlice = createSlice({
    name: 'responser',
    initialState,
    reducers: {
        setResponserMessage (state, action) {
            state.code = action?.payload?.code
            state.message = action?.payload?.message
        }
    }
})

export const { setResponserMessage } = responseSlice.actions

export default responseSlice.reducer