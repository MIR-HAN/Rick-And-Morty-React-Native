import { FETCH_CHARACTER, PENDING_CHARACTER, CHARACTER_REJECT } from "../types/characterTypes";

const initialState = {
    characterList: [],
    pending: false,
    error: null,
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING_CHARACTER:
            return {
                ...state,
                pending: true,
                error: null,
            };

        case FETCH_CHARACTER:
            return {
                ...state,
                pending: false,
                characterList: action.payload,
            };

        case CHARACTER_REJECT:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default characterReducer;
