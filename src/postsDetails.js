import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import PostDetail from './showPost';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const PostDetails = () => {
    const {id} = useParams();
    const [post,setPost] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3001/' + id).then((response) => {
            console.log(response.data);
            setPost(response.data);
            console.log(post);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return ( 
        <div id='content' className="postDetails">
            {/* {post && (
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    <div>{post.user.name}</div>
                </article>
            )} */}
            {post && <PostDetail posts={post}></PostDetail>}
        </div>
     );
}
 
export default PostDetails;