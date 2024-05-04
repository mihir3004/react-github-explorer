import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from "./slice/SearchSlice";
import DataSlice from "./slice/DataSlice";

const store = configureStore({
    reducer: {
        search: SearchSlice,
        data: DataSlice,
    },
});

export default store;
