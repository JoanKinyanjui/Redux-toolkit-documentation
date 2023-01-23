import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter";
import usersReducer from "../features/user/usersSlice"

const store = configureStore({
    reducer:{
        counter:counterReducer,
        users: usersReducer
    }
})
export default store;