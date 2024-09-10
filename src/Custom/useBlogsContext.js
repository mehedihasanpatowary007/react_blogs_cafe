import { useContext } from "react";
import { BlogsContext } from "../Context/BlogsContext";


const useBlogsContext = () => {
    return (
        useContext(BlogsContext)
    );
};

export default useBlogsContext;