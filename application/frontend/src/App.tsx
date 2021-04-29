import React, { FC } from 'react';
import { Routes } from './Routes';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#DD5544',
        },
    },
});

const App: FC = () => 
    <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes />
    </ThemeProvider>

export default App;
