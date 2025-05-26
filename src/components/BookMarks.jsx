import Bookmark from "./Bookmark";

export default function BookMarks({bookmarks,readingTime}){
    return (
        <div className="max-w-3xl mx-auto bg-yellow-50 p-4 rounded-xl shadow-inner">
  <h2 className="text-lg font-semibold mb-2 text-yellow-800">🔖 Bookmarked Posts</h2>
  <ul id="bookmarkList" className="list-disc list-inside text-yellow-700 space-y-1 text-sm">
    {/* <!-- Titles will be appended here --> */}
    <h1>Book Marks: {bookmarks.length}</h1>
    <h2>
        Readingt Time: {readingTime}
    </h2>
  </ul>

  {
    bookmarks.map(
        (bookmark)=>(
            <Bookmark key={bookmark.id} bookmark={bookmark}/>
        )
    )
  }
</div>

    );
}