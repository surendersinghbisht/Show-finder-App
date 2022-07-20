import Actor from "./models/actors";
import { Show } from "./models/shows";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const SHOWDETAIL_FETCH = "showDetail fetch";
export const SHOWDETAIL_FETCHED = "showDetail fetched";

export const SHOW_CAST_FETCH = "show cast fetch";
export const SHOW_CAST_FETCHED = "show cast fetched";

export const showCastFetchAction = (id: number) => ({
  type: SHOW_CAST_FETCH,
  payload: id,
});

export const showCastFetchedAction = (id: number, actors: Actor[]) => ({
  type: SHOW_CAST_FETCHED,
  payload: { id, actors },
});


export const showsfetchAction = (query: string) => ({
  type: SHOW_FETCH,
  payload: query,
});

export const showsfetchedAction = (query: string, shows: Show) => ({
  type: SHOW_FETCHED,
  payload: { shows, query },
});

export const showDetailFetch = (id: number) => ({
  type: SHOWDETAIL_FETCH,
  payload: id,
});

export const showDetailFetched = (show: Show) => ({
  type: SHOWDETAIL_FETCHED,
  payload: show,
});
