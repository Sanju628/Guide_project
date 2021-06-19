import React from 'react';
import reactDom from 'react-dom';
import {Route,Switch,Redirect} from "react-router-dom";
import Login from "./Signup/Login";
import Create from "./Signup/Create"

function App(){
    return(
        <>
            <Switch>
            <Route exact path="/" component={Create}/>
            <Route path="/login"  component={Login}/>
            <Redirect to="/"/>
            </Switch>
        </>

    );
}
export default App;