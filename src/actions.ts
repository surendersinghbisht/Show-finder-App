import { Show } from "./models/shows";

export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const SHOWDETAIL_FETCH = "showDetail fetch";
export const SHOWDETAIL_FETCHED = "showDetail fetched";

export const showsfetchAction = (query: string) => ({
type: SHOW_FETCH,
payload: query,
})

export const showsfetchedAction = (query: string, shows: Show) => ({
    type: SHOW_FETCHED,
    payload: {shows, query},
})

export const showDetailFetch =(id:number) => ({
type: SHOWDETAIL_FETCH,
payload: id,
})
 
export const showDetailFetched = (show:Show) => ({
type: SHOWDETAIL_FETCHED,
payload: show,
})