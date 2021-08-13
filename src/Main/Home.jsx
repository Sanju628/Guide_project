import React from "react";
import "../index.css";
import {NavLink} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

function Home()
{
    return(
        <>

        <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://piggy-rider.s3.ap-south-1.amazonaws.com/learn-web-development-by-subrat-kumar-das-primary-image-CchTzOsdNFxjrnyO.jpg"
                    
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3><i>WEB DEVELOPMENT</i></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.codingninjas.com/blog/wp-content/uploads/2021/05/Blog-58.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3><i>PLACEMENT PREPARATION</i></h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191113185616/Best-Way-To-Start-With-Competitive-Programming-GeeksforGeeks-CP-Live-Course.png"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3><i>COMPETITIVE PROGRAMING</i></h3>
                    </Carousel.Caption>
                </Carousel.Item>
        </Carousel>
        <div class="container-fluids bg-2 text-center">
        <h3 class="margin" style={{fontFamily:"Arial"}}>About This Website</h3>
        <p style={{fontFamily:"Lucida Console"}}>This Website is basically guide to beginners how to "Start Competitive","Web Development" and also provide the set of Selective Classic Questions of
        "Data Structur  e and Algorithms" and Core Subject also like "DataBase Management System","Operating System","Computer Networks"</p>
        </div>
        <div id="cards_landscape_wrap-2">
                <div class="container">
                <h5 style={{fontFamily:"impact",fontSize:"40px"}}>Guide For Resources</h5>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://miro.medium.com/max/1024/1*9QRFQdpO2f59GsN2KsE9XA.png" alt="C TUTORIAL" />
                                        </div>
                                        <div class="text-container">
                                            <h6>DSA</h6>
                                            <p><i>This Card Contain the Best Youtube Tutorial For Learning the Fundamental of the C Programming Language</i></p>
                                            <a href="/Dsavid" target="_blank" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px"}}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://spzone-simpleprogrammer.netdna-ssl.com/wp-content/uploads/2016/11/What-Is-Web-Development.png" alt="C++ TUTORIAL" />
                                        </div>
                                        <div class="text-container">                                    
                                            <h6>WEB DEVELOPMENT</h6>
                                            <p><i>This Card Contain the Best Youtube Tutorial For Learning the Fundamental of the C++ Programming Language</i></p>
                                            <a href="/linkweb" target="_blank" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px"}}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                            <a href="">
                                <div class="card-flyer">
                                    <div class="text-box">
                                        <div class="image-box">
                                            <img src="https://static-fastly.hackerearth.com/static/hackerearth/images/marketing/algorithm_blog/algo-og.jpg" alt="PYTHON TUTORIAL" />
                                        </div>

                                        <div class="text-container">
                                            <h6>COMPETITIVE PROGRAMING</h6>
                                            <p><i>This Card Contain the Best Youtube Tutorial For Learning the Fundamental of the Python Programming Language</i></p>
                                            <a href="/linkweb" target="_blank" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px"}}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluides bg-2 text-center">
            <footer className="page-footer font-small special-color-dark pt-4">
                <div className="container">
                    <ul class="list-unstyled list-inline text-center">
                    <button type="button" class="btn btn-fb"><i class="fa fa-facebook left"></i> Facebook</button>
                    <button type="button" class="btn btn-tw"><i class="fa fa-twitter left"></i> Twitter</button>
                    <button type="button" class="btn btn-gplus"><i class="fa fa-google-plus left"></i> Google +</button>
                    <button type="button" class="btn btn-li"><i class="fa fa-linkedin left"></i> Linkedin</button>
                    <button type="button" class="btn btn-ins"><i class="fa fa-instagram left"></i> Instagram</button>
                    </ul>
                </div>
                <div class="footer-copyright text-center py-3">© 2021 Copyright:
                    <a href=""> By Sanju Baloria</a>
                </div>
            </footer>
        </div>
      </>
    );
}

export default Home;