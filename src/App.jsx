import React from 'react';
import reactDom from 'react-dom';
import {Route,Switch,Redirect} from "react-router-dom";
import Login from "./Signup/Login";
import Create from "./Signup/Create";
import Lang from "./Yutlink/Lang";
import Dsavid from "./Yutlink/Dsavid";
import Prac from "./Yutlink/Prac";
import Linkweb from "./Weblink/Linkweb";
import Place from "./Placement/Place";
import Core from "./Placement/Core";
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
            <Route exact path="/lang"  component={Lang}/>
            <Route exact path="/dsavid"  component={Dsavid}/>
            <Route exact path="/Prac"  component={Prac}/>
            <Route exact path="/linkweb"  component={Linkweb}/>
            <Route exact path="/place"  component={Place}/>
            <Route path="/core"  component={Core}/>
            <Redirect to="/"/>
            </Switch>
        </>

    );
}
export default App;