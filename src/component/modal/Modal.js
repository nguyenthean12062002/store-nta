import React from "react";
const Modal = ({children ,isHidden, title, props}) =>{
    return <div className= "w-full h-full" hidden={isHidden} {...props}>
        <h4>{title}</h4>
        {/*content modal search*/}
        <div>
            {children}
        </div>
    </div>
}
export default  Modal
