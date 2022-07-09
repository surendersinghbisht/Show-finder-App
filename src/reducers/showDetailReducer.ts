import { normalize, schema } from "normalizr";
import { Reducer } from "redux";
import { SHOWDETAIL_FETCHED } from "../actions";
import { Show } from "../models/shows";


 type showDetail = {
    entities: {[id: string]: Show};
 }

 const initialShowState: showDetail = {
    entities: {},
}


export const showDetailReducer: Reducer<showDetail> = (state = initialShowState, action) => {

switch(action.type){
        case SHOWDETAIL_FETCHED:
            const show= action.payload ;

return {...state, entities: { ...state.entities, [show.id]: show },
}
  default: return state;
}
}