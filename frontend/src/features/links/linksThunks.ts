import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axiosApi";
import {ApiLink, LinkMutation} from "../../types";

export const createShortLink = createAsyncThunk<ApiLink , LinkMutation>(
    'links/createShortLink',
    async (url) => {
        const result = await axiosApi.post('/links', url);
        return result.data;
    }
);