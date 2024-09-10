import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const loadBlogs = async ()=> {
        const res = await fetch('db.json')
        const data = await res.json()
        setBlogs(data)
    }
    useEffect(() =>{
        loadBlogs()
    },[])
    return (
        <div>
           {
            blogs.map((blog) => {
                return <Blog key={blog.id} blog = {blog}/>
            })
           } 
        </div>
    );
};

export default Blogs;