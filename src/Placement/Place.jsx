import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

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
        </>
    );
}

export default Place;