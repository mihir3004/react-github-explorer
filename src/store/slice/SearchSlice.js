/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    searchBy: { label: "Name" },
    value: "",
    count: 5,
    pageNumber: 1,
    sortColumn: "",
    sortDirection: "",
};
const search = createSlice({
    initialState,
    name: "search",
    reducers: {
        setSearchBy: (state, action) => {
            state.searchBy = action.payload.searchBy;
        },
        setSortColumn: (state, action) => {
            state.sortColumn = action.payload.sortColumn;
        },
        setSortDirection: (state, action) => {
            state.sortDirection = action.payload.sortDirection;
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
        removeSortColumn: (state, action) => {
            state.count = 1;
        },
        removeSortDirection: (state, action) => {
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
    setSortColumn,
    setSortDirection,
    removeSortColumn,
    removeSortDirection,
    setPageNumber,
} = search.actions;
export default search.reducer;
