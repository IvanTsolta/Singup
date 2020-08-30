import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from "@material-ui/styles/ThemeProvider";
import theme from './Theme';
import Root from "./pages/root/Root";
import {BrowserRouter} from "react-router-dom";
import {Provider as ReduxProvider} from 'react-redux';
import store from "./data/redux/store";

document.body.style.margin = 0;

ReactDOM.render(
    <BrowserRouter>
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                <Root/>
            </ThemeProvider>
        </ReduxProvider>
    </BrowserRouter>
    , document.getElementById('root'));
