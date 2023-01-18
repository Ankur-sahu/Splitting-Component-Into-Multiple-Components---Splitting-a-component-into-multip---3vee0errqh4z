
import React from 'react'
const Main = (props) =>{
    return(
        <div id="main">
            <main id={props.id}>
            <div>{props.content}</div>
                
            {/* <div className="container">
            </div> */}
        </main>
        </div>
    )
}
export default Main
