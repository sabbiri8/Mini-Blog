import Blogs from "./components/Blogs";
import BookMarks from "./components/BookMarks";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0)

 function handleMarkasRead(id,time) {
  setReadingTime(readingTime + time);

  const remainingBookMark = bookmarks.filter(
    bookmark=>bookmark.id !==id
  )

  setBookmarks(remainingBookMark)
}
  function handleBookMark(blog) {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row gap-6 px-4 mt-4">
        <div className="flex-1">
          <Blogs 
            handleBookMark={handleBookMark}
            handleMarkasRead={handleMarkasRead}
           
           />
        </div>
        <div className="md:w-1/3">
          <BookMarks bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
}
