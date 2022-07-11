import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOW_CAST_FETCHED } from "../actions";
import Actor from "../models/actors";

type ActorState = {
    entities: {[id: number]: Actor}
}

const initialState: ActorState = {
entities: {},
}


export const actorReducer: Reducer<ActorState> = (state = initialState, action) => {

    switch(action.type){

case SHOW_CAST_FETCHED:
     const actorEntity = new schema.Entity('actors');
   const normalized = normalize(action.payload.actors, [actorEntity]);
    const normalizedActors = normalized.entities.actors;
    return{
        ...state,
        entities: {...state.entities, ...normalizedActors},
    
    };

        default:
return state;
}
}