import axios from "axios";
import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const Home = () => {
    const [posts,setPosts] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3001').then((response) => {
            console.log(response.data);
            setPosts(response.data);
        }).catch((e) => {
            console.log(e);
        })
    }, [])
    return ( 
        <div id="content" className="home">
            <h1 className="text-primary">Home</h1>
            {posts && <BlogList posts={posts}></BlogList>}
        </div>
     );
}
 
export default Home;