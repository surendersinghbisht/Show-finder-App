export const SHOW_FETCH = "show fetch";
export const SHOW_FETCHED = "show fetched";

export const showsfetchAction = () => ({
type: SHOW_FETCH,
})

export const showsfetchedAction = (shows: any[]) => ({
    type: SHOW_FETCHED,
    payload: shows,
})