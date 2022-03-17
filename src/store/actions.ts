export const ADD_INCOMING = 'ADD_INCOMING';
export const ADD_OUTCOMING = 'ADD_OUTCOMING';

export const addIncomingAction = (payload: string) => ({
    type: ADD_INCOMING,
    payload,
});

export const addOutcomingAction = (payload: string) => ({
    type: ADD_OUTCOMING,
    payload,
});
