import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchData = createAsyncThunk(
    "data/fetchData",
    async ({ value, count, pageNumber, searchBy }, thunkAPI) => {
        try {
            console.log(value);
            const fetchedData = await fetchRepositories(
                value,
                searchBy,
                count,
                pageNumber
            );
            return fetchedData;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
export const fetchRepositories = async (
    searchTerm,
    searchType,
    perPage,
    page
) => {
    try {
        const config = {
            headers: {
                Accept: "application/vnd.github+json",
                "X-GitHub-Api-Version": "2022-11-28",
                Authorization:
                    "Bearer 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",
                Cookie: "_octo=GH1.1.1706243521.1714752632; logged_in=no",
            },
        };
        console.log(searchTerm);
        console.log(searchType);
        let q = "";
        if (searchTerm) {
            q = `${searchTerm}+in:${searchType.label.toLowerCase()}`;
        } else {
            q = "created:>2021-01-01";
        }
        const response = await axios.get(
            `https://api.github.com/search/repositories?q=${q}&per_page=${perPage}&page=${page}`,
            config
        );
        return response.data;
    } catch (error) {
        throw new Error(
            error.response.data.message || "Failed to fetch repository data"
        );
    }
};

const initialState = {
    data: "",
    isLoading: false,
    error: null,
    totalCount: 150,
};
const data = createSlice({
    initialState,
    name: "data",
    reducers: {
        setData: (state, action) => {
            state.data = action.payload.data;
        },
        setTotalCount: (state, action) => {
            state.totalCount = action.payload.totalCount;
        },
        removeTotalCount: (state, action) => {
            state.totalCount = 0;
        },
        removeData: (state, action) => {
            state.data = "";
        },
        setError: (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        },
        setLoading: (state) => {
            state.isLoading = true;
            state.error = null; // Reset error when loading starts
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload.items;
                state.totalCount = action.payload.total_count;
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.data = "";
            });
    },
});

export const { setData, removeData, setTotalCount, removeTotalCount } =
    data.actions;
export default data.reducer;
