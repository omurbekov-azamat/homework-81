import React from 'react';
import ShortenLinkForm from "./features/links/components/ShortenLinkForm";
import {Container} from "@mui/material";
import AppToolbar from "./components/UI/Apptoolbar/Apptoolbar";
import ShortenLink from "./features/links/components/ShortenLink";

function App() {
    return (
        <>
            <AppToolbar/>
            <Container maxWidth='xs'>
                <ShortenLinkForm/>
                <ShortenLink/>
            </Container>
        </>
    );
}

export default App;
