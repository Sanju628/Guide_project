import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';


function Core(){
    return(
        <>
        <Carousel>
               <Carousel.Item>
                   <img
                   className="d-block w-100 h-25"
                   src="https://learnsql.com/blog/what-is-dbms/DBMS.png"
                   alt="First slide"
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img
                   className="d-block w-100 h-25"
                   src="https://static1.shine.com/l/m/images/blog/OS_Interview_Questions__Answers.png"
                   alt="Second slide"
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img
                   className="d-block w-100 h-25"
                   src="https://cdn.educba.com/academy/wp-content/uploads/2018/10/Computer-Network-Interview-Question.jpg"
                   alt="Third slide"
                   />
               </Carousel.Item>
               <Carousel.Item>
                   <img
                   className="d-block w-100 h-25"
                   src="https://static1.shine.com/l/m/images/blog/OOPS-interview-questions.png"
                   alt="Fourth slide"
                   />
               </Carousel.Item>
           </Carousel>
           <div class="jumbotron">
           <div class="container text-center">
               <h1><i>CORE SUBJECT INTERVIEWS QUESTIONS & ANSWERS</i></h1>
           </div>
           </div>
       </>
    );
}

export default Core;