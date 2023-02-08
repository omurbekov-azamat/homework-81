import React from 'react';
import ShortenLinkForm from "./features/links/components/ShortenLinkForm";
import {Container} from "@mui/material";
import AppToolbar from "./components/UI/Apptoolbar/Apptoolbar";

function App() {
    return (
        <>
            <AppToolbar/>
            <Container maxWidth='xs'>
                <ShortenLinkForm/>
            </Container>
        </>
    );
}

export default App;
