import createSagaMiddleware  from "@redux-saga/core";
import { SHOWDETAIL_FETCH, showsfetchedAction, SHOW_FETCH, showDetailFetched, showCastFetchedAction, SHOW_CAST_FETCH } from "./actions"
import { getShows, getDetails, getShowCast } from "./api"
import {call, delay, put, takeEvery, takeLatest } from "redux-saga/effects"
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


export function* fetchShowDetails(action: AnyAction):Generator<any, any, any>{
    const id: number = action.payload;
    const data = yield call(getDetails, id);
    yield put(showDetailFetched (data));
}


export function* fetchShowCast(action: AnyAction): Generator<any, any, any>{
    const id: number = action.payload;
    const data = yield call(getShowCast, id);
    const actors = data.map((d: any) => d.person);
    yield put (showCastFetchedAction(id, actors ));
}

export function* rootSaga() {
    yield takeLatest(SHOW_FETCH, fetchShowData);
    yield takeEvery(SHOWDETAIL_FETCH, fetchShowDetails);
    yield takeEvery(SHOW_CAST_FETCH, fetchShowCast);
}
