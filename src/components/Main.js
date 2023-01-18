
import React from 'react'
const Main = (props) =>{
    return(
        <main id={props.id}>
            <div>{props.content}</div>
                
            {/* <div className="container">
            </div> */}
        </main>
    )
}
export default Main
