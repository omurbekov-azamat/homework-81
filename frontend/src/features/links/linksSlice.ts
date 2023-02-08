import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";
import {createShortLink} from "./linksThunks";
import {ApiLink} from "../../types";

interface LinksSliceState {
    fetchCreateLoading: boolean;
    item: ApiLink | null;
}

const initialState: LinksSliceState = {
    fetchCreateLoading: false,
    item: null,
};

export const linksSlice = createSlice({
    name: 'links',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createShortLink.pending, (state) => {
            state.item = null;
            state.fetchCreateLoading = true;
        });
        builder.addCase(createShortLink.fulfilled, (state, {payload: shortLink}) => {
           state.fetchCreateLoading = false;
           state.item = shortLink;
        });
        builder.addCase(createShortLink.rejected, (state) => {
            state.fetchCreateLoading = false;
        });
    },
});

export const linksReducer = linksSlice.reducer;
export const selectCreateLoading = (state: RootState) => state.links.fetchCreateLoading;
export const selectShortenItem = (state: RootState) => state.links.item;