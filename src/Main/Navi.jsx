import React from "react";
import {NavLink} from "react-router-dom";
import "../index.css";
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
function Navi(){
    return(
        <>
        {/* <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
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
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/linkweb">
                                    <i>WEB-DEVELOPMENT</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/Place">
                                    <i>PLACEMENT PREPARATION</i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link-ctive" style={{paddingRight:"15px"}} aria-current="page" to="/Core">
                                    <i>CORE SUBJECTS</i>
                                </NavLink>
                            </li>
                        </ul>
                        </div>
                    </div>
            </nav> */}
                    <Navbar collapseOnSelect fixed="top" expand="sm" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Navbar.Brand href="#home" style={{paddingleft:"200px",paddingRight:"200px"}}>RoadMap</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/" style={{paddingRight:"30px"}}>Home</Nav.Link>
                                <Nav.Link href="/create" style={{paddingRight:"30px"}}>SignUp</Nav.Link>
                                <Nav.Link href="/lang" style={{paddingRight:"30px"}}>LearnLanguage</Nav.Link>
                                <Nav.Link href="/Dsavid" style={{paddingRight:"30px"}} >Dsa</Nav.Link>
                                <Nav.Link href="/Prac" style={{paddingRight:"30px"}}>PracticeDsa</Nav.Link>
                                <Nav.Link href="/linkweb" style={{paddingRight:"30px"}}>WebDevelopment</Nav.Link>
                                <Nav.Link href="/Place" style={{paddingRight:"30px"}}>ClassicQuestions</Nav.Link>
                                <Nav.Link href="/Core" style={{paddingRight:"30px"}}>CoreSubjects</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

        </>

    );
}

export default Navi;