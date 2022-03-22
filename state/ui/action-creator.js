import * as actions from "./actions";

export function startLoading() {
    return { type: actions.START_LOADING, payload: null };
}

export function stopLoading() {
    return { type: actions.STOP_LOADING, payload: null };
}
