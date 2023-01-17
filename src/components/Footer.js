import React from "react";
const Footer = (props)=>{
    return (
        <footer id={props.id}>
            <div className="container">
            {props.content}
            </div>
            
        </footer>
    )
}
export default Footer
