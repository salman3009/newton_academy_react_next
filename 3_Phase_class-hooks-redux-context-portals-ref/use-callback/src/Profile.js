import React from "react";

function Profile(props){
     console.log("profile component");
     return (<div>
       
        <button onClick={props.click}>Profile button</button>
        <h1>{props.names}</h1>
     </div>)
}
export default React.memo(Profile)