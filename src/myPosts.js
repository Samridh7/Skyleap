import axios from "axios";
import { useEffect, useState } from "react";
import MyPostsLists from "./myPostsLists";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const MyPosts = () => {
    const [posts,setPosts] = useState(null)
    const userId = JSON.parse(localStorage.user).id;
    useEffect(() => {
        axios.get(`http://localhost:3001/?userId=${userId}`).then((response) => {
            // console.log(response.data);
            setPosts(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return ( 
        <div id="content" className="myPosts">
            <h1>My Posts</h1>
            {posts && <MyPostsLists posts={posts}></MyPostsLists>}
        </div>
     );
}
 
export default MyPosts;