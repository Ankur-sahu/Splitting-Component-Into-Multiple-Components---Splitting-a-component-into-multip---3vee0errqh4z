import React from "react";
const Footer = (props)=>{
    return (
        <div id="footer">
            <footer id={props.id}>
                <div>{props.content}</div>
            {/* <div className="container">
            </div> */}
             </footer>
        </div>
    )
}
export default Footer
