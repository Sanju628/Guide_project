import React from "react";
import {NavLink} from "react-router-dom";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.css';

function Navi(){
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
                    <div className="container-fluid">
                    <a class="navbar-brand" href="#">
                    <h3 style={{fontFamily:"Palatino Linotype"}}>ROADMAP</h3>
                    </a>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link-active" style={{paddingRight:"15px"}} aria-current="page" to="/">
                                    <i>HOME</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-active" style={{paddingRight:"15px"}} aria-current="page" to="/create">
                                    <i>SIGN IN</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-active" style={{paddingRight:"15px"}} aria-current="page" to="/lang">
                                    <i>LEARN LANGUAGE</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-active" style={{paddingRight:"15px"}} aria-current="page" to="/Dsavid">
                                    <i>DATA STRUCTURE AND ALGORITHMS</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/Prac">
                                    <i>PRACTICE DATA STRUCTURE AND ALGORITHMS</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/">
                                    <i>WEB-DEVELOPMENT</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/">
                                    <i>PLACEMENT PREPARATION</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/">
                                    <i>CORE SUBJECTS</i>
                                </NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
            </nav>
        </>

    );
}

export default Navi;