import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
function Quesdata(Props){
    return(
        <>
            <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4">
                <div class="card-flyer" style={{backgroundColor:"Skyblue",height:"20rem"}}>
                    <div class="text-box">
                        <div class="text-container">
                            <h6>{Props.title}</h6>
                                <div style={{fontFamily:"Serif",fontSize:"20px",color:"green"}}><i>Easy</i></div>
                                <div style={{fontFamily:"Serif",fontSize:"20px",color:"orange"}}><i>Medium</i></div>
                                <div style={{fontFamily:"Serif",fontSize:"20px",color:"red"}}><i>Hard</i></div>
                            <div style={{padding:"15px"}}><ProgressBar variant="info" now ={80} label={`60%`} /></div>
                            <a href="#" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px"}}>Get Started</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Quesdata;