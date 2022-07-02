import { State } from "./store";

export const showsSelector=(s:State)=>{
const showsIds =  s.shows.showsAgainstQuery[s.shows.showsQuery] || [];

return showsIds.map(id => s.shows.entities[id])

};

export const showQuerySelector=(s: State)=> s.shows.showsQuery;
