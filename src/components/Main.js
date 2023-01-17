
import React from 'react'
const Main = (props) =>{
    return(
        <div id={props.id}>
            <div className="container">
                {props.content}
            </div>
        </div>
    )
}
export default Main
