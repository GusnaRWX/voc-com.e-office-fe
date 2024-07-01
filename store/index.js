import {configureStore} from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import reducers from "@/store/reducers";
import rootSaga from "@/store/sagas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
    devTools: true
})

sagaMiddleware.run(rootSaga)


export default store