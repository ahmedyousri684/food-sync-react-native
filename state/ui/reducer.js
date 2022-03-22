import * as actions from "./actions.js";
import { uiInitialState } from "./state";

export function uiReducer(state = uiInitialState, action) {
    switch (action.type) {
        case actions.START_LOADING:
            return {
                ...state,
                loading: ++state.loading,
            };

        case actions.STOP_LOADING:
            return {
                ...state,
                loading: 0,
            };

        default:
            return state;
    }
}
