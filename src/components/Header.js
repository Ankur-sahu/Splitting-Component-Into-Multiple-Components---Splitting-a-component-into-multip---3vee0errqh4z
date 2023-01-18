import React from "react";

const Header = (props)=>{
    return (
        <header id={props.id}>
                <div>{props.content}</div>
            {/* <div className="container">
            </div> */}
        </header>
    )
}
export default Header
