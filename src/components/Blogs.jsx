import { useState, useEffect } from "react";
import Blog from "./Blog";

export default function Blogs({handleBookMark,handleMarkasRead}) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogsData.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("JSON Fetch Error:", err));
  },[]);

  return (
    <>{
        blogs.map(
            (blog)=><Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleBookMark={handleBookMark}
                    handleMarkasRead={handleMarkasRead}
                />
        )
    }
       
    </>
  );
}
