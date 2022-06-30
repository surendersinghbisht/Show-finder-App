import createSagaMiddleware  from "@redux-saga/core";
import { showsfetchedAction, SHOW_FETCH } from "./actions"
import { getShows } from "./api"
import {call, delay, put, takeLatest } from "redux-saga/effects"
import { AnyAction } from "redux";

export const sagaMiddleWare = createSagaMiddleware();

export function* fetchShowData(action:AnyAction):Generator<any, any, any> {

   yield delay(500);

if(!action.payload){
return;
}
const query = action.payload
const data = yield call(getShows, query);
yield put (showsfetchedAction(query, data));
}


export function* rootSaga() {
    yield takeLatest(SHOW_FETCH, fetchShowData);
}

