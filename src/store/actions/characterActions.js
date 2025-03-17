import { CHARACTERS_URL } from "../../service/urls";
import { getRequest } from "../../service/verbs";
import { FETCH_CHARACTER, PENDING_CHARACTER, CHARACTER_REJECT } from "../types/characterTypes";


export const getCharacterList = (params) => {
    return async (dispatch) => {
        dispatch({
            type: PENDING_CHARACTER,
        });

        try {
            const response = await getRequest(CHARACTERS_URL,params); 
            console.log(response.data.results || "no results found")
            dispatch({
                type: FETCH_CHARACTER,
                payload: response.data.results, 
            });
        } catch (error) {
            console.error("Error fetching characters:", error || "succed");
            dispatch({
                type: CHARACTER_REJECT,
                payload: error?.response?.data?.message || error.message || "An error occurred",
            });
        }
    };
};
