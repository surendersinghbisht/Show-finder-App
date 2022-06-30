export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const showsfetchAction = (query: string) => ({
type: SHOW_FETCH,
payload: query,
})

export const showsfetchedAction = (shows: any[]) => ({
    type: SHOW_FETCHED,
    payload: shows,
})