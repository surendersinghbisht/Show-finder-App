import createSagaMiddleware  from "@redux-saga/core";
import { showsfetchedAction, SHOW_FETCH } from "./actions"
import { getShows } from "./api"
import {call, put, takeLeading } from "redux-saga/effects"

export const sagaMiddleWare = createSagaMiddleware();

export function* fetchShowData():Generator<any, any, any> {
const data = yield call(getShows);
const action = yield showsfetchedAction(data);
yield put(action);
}


export function* rootSaga (){
    yield takeLeading(SHOW_FETCH, fetchShowData);
}

