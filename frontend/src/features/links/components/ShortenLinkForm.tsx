import React, {useState} from 'react';
import {Button, Grid, TextField, Typography} from "@mui/material";
import {LinkMutation} from "../../../types";

const ShortenLinkForm = () => {
    const [link, setLink] = useState<LinkMutation>({
        url: '',
    });

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setLink(prev => ({...prev, [name]: value}));
    };

    const submitFormHandler = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(link);
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
                    <Button
                        type="submit"
                        color="primary"
                        variant="contained"
                    >
                        Shorten!
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default ShortenLinkForm;