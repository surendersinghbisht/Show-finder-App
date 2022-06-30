import createSagaMiddleware  from "@redux-saga/core";
import { showsfetchedAction, SHOW_FETCH } from "./actions"
import { getShows } from "./api"
import {call, delay, put, takeLatest } from "redux-saga/effects"
import { AnyAction } from "redux";

export const sagaMiddleWare = createSagaMiddleware();

export function* fetchShowData(action:AnyAction):Generator<any, any, any> {

    delay(3000);

if(!action.payload){
return;
}
const data = yield call(getShows, action.payload);
yield put (showsfetchedAction(data));
}


export function* rootSaga() {
    yield takeLatest(SHOW_FETCH, fetchShowData);
}

