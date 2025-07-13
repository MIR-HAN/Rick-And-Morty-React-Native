import { FETCH_CHARACTER, PENDING_CHARACTER, CHARACTER_REJECT, FETCH_SINGLECHARACTER, PENDING_SINGLECHARACTER, SINGLECHARACTER_REJECT, CHANGE_PARAMS, LOAD_MORE_DATA } from "../types/characterTypes";

const initialState = {
    characterList: [],
    singleCharacter: {},
    pendingForSingleCharacter: false,
    pending: false,
    error: null,
    errorForSingleCharacter: null,
    params:{
        page:1,
        status:null,
        gender:null,
        name:null
    }
};

const characterReducer = (state = initialState, action) => {
    switch (action.type) {


        case FETCH_CHARACTER:
            return {
                ...state,
                pending: false,
                characterList: action.payload,
            };

        case PENDING_CHARACTER:
            return {
                ...state,
                pending: true,
                error: null,
            };

        case CHARACTER_REJECT:
            return {
                ...state,
                pending: false,
                error: action.payload,
            };

        //SINGLE CHARACTER

        case FETCH_SINGLECHARACTER:
            return {
                ...state,
                pendingForSingleCharacter: false,
                singleCharacter: action.payload,
            };

        case PENDING_SINGLECHARACTER:
            return {
                ...state,
                pendingForSingleCharacter: true,
                errorForSingleCharacter: null,
            };

        case SINGLECHARACTER_REJECT:
            return {
                ...state,
                pendingForSingleCharacter: false,
                errorForSingleCharacter: action.payload,
            };

            case CHANGE_PARAMS:
                return {
                    ...state,
                   params:{
                    ...state.params,
                    ...action.params
                   }
                   
                };
                case LOAD_MORE_DATA: {
                    const combined = [...state.characterList, ...action.payload];
                    const unique = Array.from(new Map(combined.map(item => [item.id, item])).values());
                    return {
                      ...state,
                      characterList: unique,
                    };
                  }
    
        
        default:
            return state;
    }
};

export default characterReducer;
