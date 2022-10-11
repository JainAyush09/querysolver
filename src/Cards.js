import React from "react";

function Cards (props){
    return(
    <div>
    <div className="bottom">
        <h3>{props.title}</h3>
       
        
        <h4>{props.content}</h4>
        </div>
        <div className="bottom2">
        <h3>{props.title}</h3>
       
        
        <h4>{props.content}</h4>
        </div>
        <div className="bottom3">
        <h3>{props.title}</h3>
       
        
        <h4>{props.content}</h4>
        </div>
    </div>
    );
}
export default Cards;