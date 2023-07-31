import { configureStore } from "@reduxjs/toolkit";
import { processes } from "./Redux/Reducer";

export const store = configureStore({
    reducer:processes
})

/* eğer birden fazla reducer varsa combineReducer kulanabilrsin */