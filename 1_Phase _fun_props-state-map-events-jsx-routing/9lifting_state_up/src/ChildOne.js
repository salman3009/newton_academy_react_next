

function ChildOne(props){
   
    return(<div>
        <h1>Children One</h1>
        <input type="text" onChange={(event)=>props.onChangeHandler(event)}/>
    </div>)
}
export default ChildOne;