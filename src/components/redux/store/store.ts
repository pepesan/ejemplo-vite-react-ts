// Paso 3: Creación del Store
// importa el configureStore
import { configureStore } from '@reduxjs/toolkit'

// importa el reducer
import rootReducer from "./reducer.ts";

// crea el store
const store = configureStore({ reducer: rootReducer })

// exporta el store
export default store;
