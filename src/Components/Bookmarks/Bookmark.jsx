import PropTypes from 'prop-types'
import useBlogsContext from '../../Custom/useBlogsContext';

const Bookmark = ({bookmark}) => {
    const { handleBookmarkRemove } =
      useBlogsContext();
    const {id,title, author} = bookmark;
    return (
      <div className="bg-white flex flex-col gap-2 relative justify-center items-center rounded py-5 duration-200">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="italic text-[15px]">
          written by <a className='underline' href="#">{author}</a>
        </p>
        <button onClick={()=> handleBookmarkRemove(id)} className=' absolute top-0 right-3 text-2xl flex justify-center items-center'>x</button>
      </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;