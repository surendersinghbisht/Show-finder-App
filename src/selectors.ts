import { State } from "./store";

export const showsSelector=(s:State)=> s.shows;

export const showQuerySelector=(s: State)=> s.showsQuery;
