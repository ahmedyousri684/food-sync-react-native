import { combineReducers } from "redux";
import { uiReducer } from "./ui/reducer";

export const reducer = combineReducers({ ui: uiReducer })