import {ADD_INCOMING, ADD_OUTCOMING} from "../actions";
import {nextMessageId} from "../../helpers";
import {Message} from "../../types/Message";
import {Action} from "../../types/Action";
import {MessageTypeEnum} from "../../types/MessageTypeEnum";

interface State {
    messages: Message[],
}

export const initialState = {
    messages: [],
}

export const appReducer = (
    state: State = initialState,
    action: Action
) => {
    switch (action.type) {
        case ADD_INCOMING:
            return {
                ...state,
                messages: [
                    ...state.messages, {
                        id: nextMessageId(state.messages[state.messages.length - 1]?.id || 0),
                        title: action.payload,
                        type: MessageTypeEnum.INCOMING,
                }],
            };
        case ADD_OUTCOMING:
            return {
                ...state,
                messages: [
                    ...state.messages, {
                    id: nextMessageId(state.messages[state.messages.length - 1]?.id || 0),
                    title: action.payload,
                    type: MessageTypeEnum.OUTCOMING,
                },
            ]};
        default:
            return { ...state }
    }
}
