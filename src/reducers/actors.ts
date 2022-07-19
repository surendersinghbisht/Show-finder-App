import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCH, SHOW_CAST_FETCHED } from "../actions";
import Actor from "../models/actors";

type ActorState = {
    entities: {[id: number]: Actor};
    actorsLoading: { [id: number] : boolean };
}

const initialState: ActorState = {
entities: {},
actorsLoading: {},
}


export const actorReducer: Reducer<ActorState> = (state = initialState, action) => {

    switch(action.type){

  case SHOW_CAST_FETCH:
    return{
        ...state, 
        actorsLoading: { [action.payload]: true}
    }

case SHOW_CAST_FETCHED:
     const actorEntity = new schema.Entity('actors');
   const normalized = normalize(action.payload.actors, [actorEntity]);
    const normalizedActors = normalized.entities.actors;
    return{
        ...state,
        entities: {...state.entities, ...normalizedActors},
        actorsLoading: { [action.payload]: false },
    };

        default:
return state;
}
}