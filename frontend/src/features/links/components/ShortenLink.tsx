import React from 'react';
import {Box, Link, Typography} from "@mui/material";

const ShortenLink = () => {
    return (
        <Box sx={{mt: 6}}>
            <Typography variant="h6" component="div" sx={{flexGrow: 1, mb: 2}}>
                Your link now looks like this
            </Typography>
            <Link href="#">
                Link
            </Link>
        </Box>
    );
};

export default ShortenLink;