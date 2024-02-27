
// import {redirect} from 'react-router-dom';


function Login(){
     
    const user= true;

    //The <redirect /> component has been deprecated and replaced with React <Navigate/> in React Router v6. 
     if (!user) {
        return <redirect to="/register" />
      }
     else{
        return (<div>
            <h1>Login</h1>
         </div>)
     }

    
 }
 export default Login;