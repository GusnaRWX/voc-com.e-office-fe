import {all} from 'redux-saga/effects'
import exampleSaga from "@/store/sagas/exampleSaga";
import letterSaga from "@/store/sagas/letterSaga";

export default function* rootSaga() {
    yield all([
        exampleSaga(),
        letterSaga(),
    ])
}