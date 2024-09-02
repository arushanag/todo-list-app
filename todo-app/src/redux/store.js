//Import functions and Reducers
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

//Create a Redux store with the specified reducers
const store = configureStore({
    reducer: reducer,
});
//Export the configured stores
export default store;