import {combineReducers} from "@reduxjs/toolkit";
import exampleSlice from "@/store/reducers/slice/exampleSlice";
import responseSlice from "@/store/reducers/slice/responseSlice";

const reducers = combineReducers({
    example: exampleSlice,
    responser: responseSlice
})

export default reducers;