import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Quesdata from "./Quesdata";


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
                        <Quesdata title="ARRAY QUESTIONS"/>
                        <Quesdata title="2D MATRIX QUESTIONS"/>
                        <Quesdata title="BINARY SEARCH AND SORTING QUESTIONS"/>
                        <Quesdata title="GREEDY QUESTIONS"/>
                        <Quesdata title="BINARY SEARCH TREE QUESTIONS"/>
                        <Quesdata title="BINARY TREE QUESTIONS"/>
                        <Quesdata title="HEAP QUESTIONS"/>
                        <Quesdata title="GRAPH QUESTIONS"/>
                        <Quesdata title="LINKLIST QUESTIONS"/>
                        <Quesdata title="TRIE QUESTIONS"/>
                        <Quesdata title="STACK AND QUEUE QUESTIONS"/>
                        <Quesdata title="BACKTRACKING QUESTIONS"/>
                        <Quesdata title="BIT MANIPULATION QUESTIONS"/>
                        <Quesdata title="STRING QUESTIONS"/>
                        <Quesdata title="DYNAMIC PROGRAMING QUESTIONS"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Place;