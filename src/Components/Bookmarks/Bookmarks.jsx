import useBlogsContext from "../../Custom/useBlogsContext";
import Bookmark from "./Bookmark";

const Bookmarks = () => {
  const { bookmarks, totalReadTime } = useBlogsContext();
  console.log(bookmarks)
  return (
    <div className="my-10 sticky top-5">
      <div className="bg-violet-100 flex justify-center items-center rounded py-5">
        <p className="text-violet-600 text-xl font-semibold">
          Spent time on read : {totalReadTime}
        </p>
      </div>
      <div className="bg-gray-300 min-h-[480px] my-[20px] rounded p-4 flex flex-col gap-4">
        {bookmarks.map((bookmark, index) => {
          return <Bookmark key={index} bookmark={bookmark} />;
        })}
      </div>
    </div>
  );
};

export default Bookmarks;
