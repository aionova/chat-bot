import {State} from "../types/State";

export const selectMessages = (state: State) => (state.messages);
