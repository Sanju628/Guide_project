import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';


function Place(){
    return(
        <>
         <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://hackr.io/blog/data-structure-interview-questions/thumbnail/large"
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.alpha-sense.com/wp-content/uploads/2020/10/AS-Blog-FAANG2-1-1.png"
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 h-25"
                    src="https://www.leadagency.com.au/wp-content/uploads/2019/04/Tech-Company-1200x720.png"
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <div class="jumbotron">
            <div class="container text-center">
                <h1><i>ACE YOUR TOP TECH COMPANY INTERVIEWS</i></h1>
            </div>
            </div>
            <div id="cards_landscape_wrap-2">
                <div class="container" >
                <h5 style={{fontFamily:"Serif",fontSize:"40px",color:"Blue"}}>DATA STRUCTURE AND ALGORITHMS QUESTIONS</h5>
                    <div class="row">
                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                                <div class="card-flyer"  style={{backgroundColor:"Skyblue"}}>
                                    <div class="text-box">
                                        <div class="text-container">
                                            <h6>ARRAY QUESTIONS</h6>
                                            <div style={{fontFamily:"Serif",fontSize:"20px",color:"green"}}>
                                                <i>Easy</i>
                                            </div>
                                            <div style={{fontFamily:"Serif",fontSize:"20px",color:"orange"}}>
                                                <i>Medium</i>
                                            </div>
                                            <div style={{fontFamily:"Serif",fontSize:"20px",color:"red"}}>
                                                <i>Hard</i>
                                            </div>
                                            <div style={{padding:"15px"}}><ProgressBar variant="info" now ={80} label={`60%`} /></div>
                                            <a href="#" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px"}}>Get Started</a>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Place;