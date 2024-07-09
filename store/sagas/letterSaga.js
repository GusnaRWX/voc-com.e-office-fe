import { call, put, takeEvery, delay } from 'redux-saga/effects'
import {getLetterRequested, getLetterSuccess, getLetterFailed, postLetterRequested, postLetterFailed, postLetterSuccess} from "@/store/reducers/slice/letterSlice";
import {setResponserMessage} from "@/store/reducers/slice/responseSlice";
import {getLetters, postLetter} from "@/store/sagas/saga-actions/letterActions";


function* fetchGetLetter (action) {
    try {
        const res = yield call(getLetters, action?.payload)

        if (res) {
            yield put({
                type: getLetterSuccess.toString(),
                payload: {
                    data: res?.data?.data
                }
            })
        }
    } catch (err) {
        yield put({type: getLetterFailed.toString()})
        yield put({
            type: setResponserMessage.toString(),
            payload: {
                code: err?.response?.data?.code,
                message: err?.response?.data?.message
            }
        })
        yield delay(3000)
        yield put({
            type: setResponserMessage.toString(),
            payload: {
                code: 0,
                message: ''
            }
        })
    }
}

function* fetchPostLetter (action) {
    try {
        const res = yield call(postLetter, action?.payload)

        console.log('here : ', res)

        if (res) {
            yield put({ type: postLetterRequested.toString() })
            window.location.href = '/surat-keluar'
            // yield put({ type: setResponserMessage.toString(), payload: {
            //     code: res?.data?.code,
            //     message: res?.data?.message
            //     } })
            // yield delay(3000)
            // yield put({
            //     type: setResponserMessage.toString(),
            //     payload: {
            //         code: 0,
            //         message: ''
            //     }
            // })

        }
    } catch (err) {
        yield put({type: postLetterFailed.toString()})
        yield put({type: setResponserMessage.toString(), payload: {
            code: err?.response?.data?.code,
            message: err?.response?.data?.message
            }})
        yield delay(3000)
        yield put({
            type: setResponserMessage.toString(),
            payload: {
                code: 0,
                message: ''
            }
        })
    }
}

function* letterSaga() {
    yield takeEvery(getLetterRequested.toString(), fetchGetLetter)
    yield takeEvery(postLetterRequested.toString(), fetchPostLetter)
}

export default letterSaga;