import React from "react";
const Footer = (props)=>{
    return (
        <footer id={props.id}>
                <div>{props.content}</div>
            {/* <div className="container">
            </div> */}
            
        </footer>
    )
}
export default Footer
