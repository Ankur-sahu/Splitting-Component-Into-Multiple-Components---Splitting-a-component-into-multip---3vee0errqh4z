import React from "react";

const Header = (props)=>{
    return (
        <div id={props.id}>
                {props.content}
            {/* <div className="container">
            </div> */}
        </div>
    )
}
export default Header
