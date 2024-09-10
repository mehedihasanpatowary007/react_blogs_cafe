import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title, author} = bookmark;
    return (
      <div className="bg-white flex flex-col gap-2 relative justify-center items-center rounded py-5 duration-200">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="italic text-[15px]">
          written by{" "}
          <a className="underline" href="#">
            {author}
          </a>
        </p>
      </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;