import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../../app/hooks";
import {createShortLink} from "../linksThunks";
import {Grid, TextField, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {selectCreateLoading} from "../linksSlice";
import {LinkMutation} from "../../../types";

const ShortenLinkForm = () => {
    const dispatch = useAppDispatch();
    const createLoading = useSelector(selectCreateLoading)
    const [link, setLink] = useState<LinkMutation>({
        url: '',
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLink(prev => ({...prev, [name]: value}));
    };

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(createShortLink(link));
        setLink({
            url: '',
        });
    };

    return (
        <form onSubmit={submitFormHandler}>
            <Grid container direction='column' spacing={2}>
                <Grid item xs>
                    <Typography variant="h6" component='h4' sx={{flexGrow: 1}}>
                        Shorten your link!
                    </Typography>
                </Grid>
                <Grid item xs>
                    <TextField
                        id="url" label="Enter URL here"
                        name="url"
                        value={link.url}
                        onChange={inputChangeHandler}
                    />
                </Grid>
                <Grid item xs>
                    <LoadingButton
                        type="submit"
                        color="primary"
                        variant="contained"
                        loading={createLoading}
                    >
                        Shorten!
                    </LoadingButton>
                </Grid>
            </Grid>
        </form>
    );
};

export default ShortenLinkForm;