import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
import useBlogsContext from "../../Custom/useBlogsContext";

const Blog = ({ blog }) => {
  const { bookmarkAdd, handleReadTime } = useBlogsContext();
  const {id, cover_image, title, author, author_image, post_date, read_time, hash_tags } = blog;
  return (
    <div className="flex flex-col gap-6 my-10 p-4 custom-shadow rounded">
      <div>
        <img
          className="w-[900px] h-[450px] rounded"
          src={cover_image}
          alt={`Blog of ${title}`}
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div>
            <img
              className="size-[50px] rounded-full object-cover"
              src={author_image}
              alt="author"
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{author}</h2>
            <p className="text-[15px] text-slate-400">{post_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{read_time} min read</p>
          <button
            className="active:text-red-500"
            onClick={() => bookmarkAdd(blog)}
          >
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-4xl uppercase font-semibold">{title}</h2>
      </div>
      <div className="flex gap-2">
        {hash_tags.map((tag, index) => {
          return (
            <p className="underline text-blue-400" key={index}>
              <a href="#">{tag}</a>
            </p>
          );
        })}
      </div>
      <div>
        <p
          className="text-blue-400 underline cursor-pointer font-semibold active:text-black duration-100"
          onClick={() => handleReadTime(id, read_time)}
        >
          Mark as a read
        </p>
      </div>
    </div>
  );
};

export default Blog;

Blog.propTypes = {
    blog: PropTypes.object
}
