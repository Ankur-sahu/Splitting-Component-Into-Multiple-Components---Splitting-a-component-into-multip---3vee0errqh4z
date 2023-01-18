import React from "react";

const Header = (props)=>{
    return (
        <header id={props.id}>
                {props.content}
            {/* <div className="container">
            </div> */}
        </header>
    )
}
export default Header
