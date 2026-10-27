import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./features/login/userSlice";
import { todosApi } from "./services/todoApi";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer:{
        user:userReducer,
        [todosApi.reducerPath]: todosApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todosApi.middleware),

});

setupListeners(store.dispatch)
