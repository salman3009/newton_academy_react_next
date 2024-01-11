
function ChildComponent(props){
    return (
        <div style={{backgroundColor:"grey",padding:"10px"}}>
             <h4>This is children component</h4>
             {props.children}
        </div>
    )
}
export default ChildComponent;