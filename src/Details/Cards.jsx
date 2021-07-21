import React from 'react';
import ReactDOM from 'react-dom';
import "../index.css";

function Cards(props){
    return (
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-4">
            <div className="card-flyer">
                <div className="text-box">
                    <div className="image-box">
                        <img src={props.imgscr} alt={props.alter} />
                    </div>
                    <div className="text-container">
                        <h6>{props.title}</h6>
                        <p><i>{props.description}</i></p>
                        <a href={props.youtubelink} target="_blank" class="btn btn-primary" style={{marginTop: "10px",borderRadius:"20px",marginRight:"25px"}}>Video Tutorial</a>
                        <a href={props.noteslink} class="btn btn-primary" target="_blank" style={{marginTop: "10px",borderRadius:"20px"}}>Notes Tutorial</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;