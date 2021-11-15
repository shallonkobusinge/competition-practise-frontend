import * as actions from '../actions/userAction'

export const initialState = {
    users: {},
    loading: false,
}

export default function usersReducer(state = initialState, action) {
    switch (action.type) {
        case actions.GET_USERS:
            return { ...state, loading: true };
        case actions.GET_USERS_SUCCESS:
            return {
                users: action.payload,
                loading: false
            }
        case actions.GET_USERS_FAILURE:
            return { ...state, loading: false }
        default:
            return state;
    }
}