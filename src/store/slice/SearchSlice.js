/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchBy: { label: "Name" },
    value: "",
    count: 5,
    pageNumber: 1,
};
const search = createSlice({
    initialState,
    name: "search",
    reducers: {
        setSearchBy: (state, action) => {
            state.searchBy = action.payload.searchBy;
        },
        setValue: (state, action) => {
            state.value = action.payload.value;
        },
        setCount: (state, action) => {
            state.count = action.payload.count;
        },

        setPageNumber: (state, action) => {
            state.pageNumber = 1;
        },
        incrementPage: (state, action) => {
            state.pageNumber++;
        },
        decrementPage: (state, action) => {
            state.pageNumber--;
        },

        removeValue: (state, action) => {
            state.value = "";
        },
        removeCount: (state, action) => {
            state.count = 1;
        },
        removeSearchBy: (state, action) => {
            state.searchBy = "";
        },
    },
});
export const {
    setSearchBy,
    setValue,
    removeSearchBy,
    removeValue,
    setCount,
    removeCount,
    incrementPage,
    decrementPage,
    setPageNumber,
} = search.actions;
export default search.reducer;
