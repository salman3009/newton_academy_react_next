
import { useRef } from "react";

 
function Uncontrolled() {
    const inputRef = useRef(null);
 
    function handleSubmit() {
        alert(`Name: ${inputRef.current.value}`);
    }
 
    return (
        <div className="App">
            <h3>Uncontrolled Component</h3>
            <form onSubmit={handleSubmit}>
                <label>Name :</label>
                <input
                    type="text"
                    name="name"
                    ref={inputRef}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
 
export default Uncontrolled;