import {UserContext} from './App';
import {useContext} from 'react';

function ComponentC(){

    const value = useContext(UserContext);  
    
return(
      <div>

        {/* approach 1 */}
        <UserContext.Consumer>
            {
                obj=>{
                    return (<div>{obj}</div>)
                }
            }
        </UserContext.Consumer>

        {/* approach 2 */}
        <h1>{value}</h1>

       </div>
       )
}

export default ComponentC;