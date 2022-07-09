import { createSelector } from "reselect";
import { State } from "./store";

 const showStateSelector = (s:State) => s.shows;

export const showEntitiesSelector = createSelector(
    showStateSelector,
    (showState) => showState.entities
)

const showAgainstQuerySelector = createSelector(
    showStateSelector,
    (showState) => showState.showsAgainstQuery
)

export const showsQuerySelector = createSelector(
    showStateSelector,
(showState) => showState.showsQuery
)

export const showsIdsSelector = createSelector(
    showsQuerySelector,
    showAgainstQuerySelector,
    (query, againstQuery) => againstQuery[query] || []
)


export const showQuerySelector = createSelector(
    showStateSelector, 
    (showState) =>
showState.showsQuery
)

export const showsSelector = createSelector(
    showsIdsSelector,
    showEntitiesSelector,
    (ids, entities) => ids.map ((id) => entities[id])
)

