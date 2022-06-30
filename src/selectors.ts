import { State } from "./store";

export const showsSelector=(s:State)=> s.shows[s.showsQuery] || [];

export const showQuerySelector=(s: State)=> s.showsQuery;
