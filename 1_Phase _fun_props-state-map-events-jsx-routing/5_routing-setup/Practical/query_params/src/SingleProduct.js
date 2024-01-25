import {useParams} from 'react-router-dom';

export const SingleProduct=()=>{

    const {id} = useParams();

    return (<div>
     <h1>Params:{id}</h1>
    </div>)
}