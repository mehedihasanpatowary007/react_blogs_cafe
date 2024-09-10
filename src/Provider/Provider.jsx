import PropTypes from 'prop-types';
import { useState } from "react";
import { BlogsContext } from "../Context/BlogsContext";

const Provider = ({children}) => {
    const [bookmarks, setBookmarks] = useState([])
    const [totalReadTime, setTotalReadTime] = useState(0)
    console.log(bookmarks)
    const bookmarkAdd = (blog) => {
        
        const newBlog = [...bookmarks, blog];
        setBookmarks(newBlog)
    }
    const handleBookmarkRemove = (id) => {
        const filterBookmark = bookmarks.filter(bookmark => bookmark.id !== id)
        setBookmarks(filterBookmark)
    }
    const value = {
      bookmarks,
      setBookmarks,
      bookmarkAdd,
      handleBookmarkRemove,
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

Provider.propTypes = PropTypes.any
