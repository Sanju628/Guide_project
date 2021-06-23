import React from 'react';
import reactDom from 'react-dom';
import {Route,Switch,Redirect} from "react-router-dom";
import Login from "./Signup/Login";
import Create from "./Signup/Create";
import Lang from "./Yutlink/Lang";
import Home from "./Main/Home";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navi from "./Main/Navi";
import "./index.css";
function App(){
    return(
        <>
            <Navi/>
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/create" component={Create}/>
            <Route exact path="/login"  component={Login}/>
            <Route path="/lang"  component={Lang}/>
            <Redirect to="/"/>
            </Switch>
        </>

    );
}
export default App;