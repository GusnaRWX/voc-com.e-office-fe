import {combineReducers} from "@reduxjs/toolkit";
import exampleSlice from "@/store/reducers/slice/exampleSlice";
import responseSlice from "@/store/reducers/slice/responseSlice";
import letterSlice from "@/store/reducers/slice/letterSlice";

const reducers = combineReducers({
    example: exampleSlice,
    responser: responseSlice,
    letter: letterSlice,
})

export default reducers;