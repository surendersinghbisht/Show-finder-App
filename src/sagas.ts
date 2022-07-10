import createSagaMiddleware  from "@redux-saga/core";
import { SHOWDETAIL_FETCH, showsfetchedAction, SHOW_FETCH, showDetailFetched } from "./actions"
import { getShows, getDetails } from "./api"
import {call, delay, put, takeEvery, takeLatest, takeLeading } from "redux-saga/effects"
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


export function* fetchShowDetails(action:AnyAction):Generator<any, any, any>{
    const id: number = action.payload
    const data = yield call(getDetails, id)
    yield put(showDetailFetched (data))
}


export function* rootSaga() {
    yield takeLatest(SHOW_FETCH, fetchShowData);
    yield takeLatest(SHOWDETAIL_FETCH, fetchShowDetails)
}


