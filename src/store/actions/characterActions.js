import { CHARACTERS_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import { FETCH_CHARACTER, PENDING_CHARACTER, CHARACTER_REJECT, FETCH_SINGLECHARACTER, PENDING_SINGLECHARACTER, SINGLECHARACTER_REJECT, CHANGE_PARAMS, LOAD_MORE_DATA
 } from "../types/characterTypes";


export const getCharacterList = (params) => {
    return async (dispatch) => {
        dispatch({
            type: PENDING_CHARACTER,
        });

        try {
            const response = await getRequest(CHARACTERS_URL,params); 
        
            dispatch({
                type: FETCH_CHARACTER,
                payload: response.data.results, 
            });
        } catch (error) {
        
            dispatch({
                type: CHARACTER_REJECT,
                payload: error?.response?.data?.message || error.message || "An error occurred",
            });
        }
    };
};

//GET SINGLE CHARACTER

export const getSingleCharacter = (characterID) => {

    const url = `${CHARACTERS_URL}/${characterID}`

    return async (dispatch) => {
        dispatch({
            type: PENDING_SINGLECHARACTER,
        });

        try {
            const response = await getRequest(url); 
 
            dispatch({
                type: FETCH_SINGLECHARACTER,
                payload: response.data, 
            });
        } catch (error) {
            console.error("Error fetching characters:", error || "succed");
            dispatch({
                type: SINGLECHARACTER_REJECT,
                payload: error?.response?.data?.message || error.message || "An error occurred",
            });
        }
    };
};

export const changeParams =(params)=>{

return async dispatch =>{
    dispatch({type:CHANGE_PARAMS,params:params})
}
}

export const loadMoreCharacter = (params) => {
    return async (dispatch) => {

        try {
            const response = await getRequest(CHARACTERS_URL,params); 
            dispatch({
                type: LOAD_MORE_DATA,
                payload: response.data.results, 
            });
        } catch (error) {
            dispatch({
                type: CHARACTER_REJECT,error:error     
            });
        }
    };
};








     

