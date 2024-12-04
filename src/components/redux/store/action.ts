// Paso 5: Define las acciones realizables y las Props

import {ADD_ARTICLE, CLEAR_ARTICLE, MiAccion} from "./GlobalState.ts";

export function addArticle(payload: string): MiAccion {
    return { type: ADD_ARTICLE, payload };
}
export function clearArticle(): MiAccion {
    return { type: CLEAR_ARTICLE, payload: "" };
}



