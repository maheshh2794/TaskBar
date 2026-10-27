import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    token: window.localStorage.getItem("token") || null,
    name: window.localStorage.getItem("name") || null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, {payload}) => {
            state.token = payload.token;
            window.localStorage.setItem("token", payload.token);
            state.name = payload.name;
            window.localStorage.setItem("name", payload.name);
        },
        logout: (state, action) => {
            state.token = null  
            window.localStorage.removeItem('token');
            state.name = null  
            window.localStorage.removeItem('name');
        }
    }
})

export const { login, logout } = userSlice.actions
const userReducer = userSlice.reducer
export default userReducer;