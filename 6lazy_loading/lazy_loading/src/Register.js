import { useNavigate } from "react-router-dom";




function Register(){

     const navigate = useNavigate();

    const onClickHandler=()=>{
        navigate('/login');
    }

    return (<div>
       <h1>Register</h1>
       <button onClick={onClickHandler}>Register</button>
    </div>)
 }
 export default Register;