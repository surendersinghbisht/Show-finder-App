import { createSelector } from "reselect";
import Actor from "./models/actors";
import { State } from "./store";

const showStateSelector = (s: State) => s.shows;
const actorStateSelector = (s: State) => s.actors;

export const showEntitiesSelector = createSelector(
  showStateSelector,
  (showState) => showState.entities
);

const showAgainstQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.showsAgainstQuery
);

export const showsQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.showsQuery
);

export const showsIdsSelector = createSelector(
  showsQuerySelector,
  showAgainstQuerySelector,
  (query, againstQuery) => againstQuery[query] || []
);

export const showQuerySelector = createSelector(
  showStateSelector,
  (showState) => showState.showsQuery
);

export const showsSelector = createSelector(
  showsIdsSelector,
  showEntitiesSelector,
  (ids, entities) => ids.map((id) => entities[id])
);

export const showLoadingSelector = createSelector(
  showStateSelector,
  (showState) => showState.showLoading
);

export const actorsEntitiesSelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.entities
);

export const showActorIdsSelector = createSelector(
  showStateSelector,
  (showState) => showState.actors
);

export const showActorsSelector = createSelector(
  showActorIdsSelector,
  actorsEntitiesSelector,
  (showActorIds, actorEntities) => {
    const data = Object.keys(showActorIds).reduce((showActors, showIds) => {
      const actorIds = showActorIds[+showIds];
      const actors = actorIds.map((id) => actorEntities[id]);
      return { ...showActors, [+showIds]: actors };
    }, {});
    return data as { [id: number]: Actor[] };
  }
);

export const showActorsLoadingSelector = createSelector(
  actorStateSelector,
  (actorState) => actorState.actorsLoading
);

export const mainLoadingSelector = createSelector(
  showStateSelector,
  (mainPageLoading) => mainPageLoading.mainLoading
);
