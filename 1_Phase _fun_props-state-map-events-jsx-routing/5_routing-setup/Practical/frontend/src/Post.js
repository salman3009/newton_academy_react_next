import {useParams} from 'react-router-dom';

function Post() {

    const {id} = useParams();
    console.log(id);

    return <h2>Post ID: {id}</h2>;
}

export default Post;