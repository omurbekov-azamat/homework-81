import React from 'react';
import {AppBar, Container, Toolbar, Typography} from '@mui/material';

const AppToolbar = () => {
    return (
        <AppBar position="sticky" sx={{mb: 2}}>
            <Container maxWidth='xs'>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        Try to short your link
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default AppToolbar;