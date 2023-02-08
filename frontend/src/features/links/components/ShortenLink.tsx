import React from 'react';
import {useSelector} from "react-redux";
import {selectShortenItem} from "../linksSlice";
import {Box, Link, Typography} from "@mui/material";
import {apiUrl} from "../../../constants";

const ShortenLink = () => {
    const item = useSelector(selectShortenItem)
    return (
        <>
            {item ? (
                <Box sx={{mt: 6}}>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1, mb: 2}}>
                        Your link now looks like this
                    </Typography>
                    <Link href={item.originalUrl}>
                        {apiUrl + '/' + item.shortUrl}
                    </Link>
                </Box>
            ): <h5>You have to write your link!</h5>}
        </>
    );
};

export default ShortenLink;