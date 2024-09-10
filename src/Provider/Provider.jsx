import PropTypes from 'prop-types';
import { useState } from "react";
import { BlogsContext } from "../Context/BlogsContext";

const Provider = ({children}) => {
    const [bookmarks, setBookmarks] = useState([])
    const [totalReadTime, setTotalReadTime] = useState(0)
    console.log(bookmarks)



    const bookmarkAdd = (blog) => {
        const filtersDuplicateBlog = bookmarks.find(bookmark => bookmark.id === blog.id)
        if(filtersDuplicateBlog){
            return alert('book already added')
        }
        else{
            setBookmarks([...bookmarks, blog])
        }
    }

    
    const handleReadTime = (id, time) => {
        setTotalReadTime(totalReadTime + time)
        const filterBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(filterBookmark)
    }


    const value = {
      bookmarks,
      setBookmarks,
      bookmarkAdd,
      handleReadTime,
      totalReadTime,
      setTotalReadTime,
    };
    return (
        <BlogsContext.Provider value={value}>
            {children}
        </BlogsContext.Provider>
    );
};

export default Provider;

Provider.propTypes ={ children: PropTypes.any}
