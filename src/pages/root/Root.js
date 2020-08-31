import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import FrontendRoutes from "../../data/constants/FrontedRoutes";
import SignUpContainer from "../signUp/containers/SignUpContainer";

const Root = props => {
    return (<Switch>
        <Route exact path={FrontendRoutes.SIGN_UP} component={SignUpContainer}/>
        <Redirect to={FrontendRoutes.SIGN_UP}/>
    </Switch>)
};

export default Root;