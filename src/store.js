import { configureStore } from "@reduxjs/toolkit";
import indexReducer from "./features/calculator"



export const store=configureStore({
reducer:{
index:indexReducer,

}


})