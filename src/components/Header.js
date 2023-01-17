import React from "react";

const Header = (props)=>{
    return (
        <header id={props.id}>
            <div className="container">
                {props.content}
            </div>
        </header>
    )
}
export default Header
