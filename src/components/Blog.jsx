export default function Blog({ blog, handleBookMark, handleMarkasRead }) {
    return (
        <div className="relative max-w-2xl mx-auto bg-white rounded-xl shadow p-6 mb-8 border border-gray-100">

            {/* Bookmark & Mark as Read Buttons */}
            <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                <button
                    className="text-gray-400 hover:text-yellow-500 transition text-sm font-medium"
                    type="button"
                    aria-label="Bookmark"
                    onClick={() => handleBookMark(blog)}
                >
                    🔖 Bookmark
                </button>

                <button
                    className="text-gray-400 hover:text-green-600 transition text-sm font-medium"
                    type="button"
                    aria-label="Mark as Read"
                    onClick={() => handleMarkasRead(blog.id,blog.readingTime)}
                >
                    ✅ Mark as Read
                </button>
            </div>

            {/* Author Info */}
            <div className="flex items-center gap-3 mb-4 mt-6">
                <img
                    src={blog.author_img}
                    alt={blog.author}
                    className="w-12 h-12 rounded-full object-cover border border-gray-300"
                />
                <div>
                    <div className="font-semibold text-gray-800">{blog.author}</div>
                    <div className="text-xs text-gray-500">{blog.postedDate}</div>
                </div>
            </div>

            {/* Cover Image */}
            <img
                src={blog.cover}
                className="w-full h-56 object-cover rounded-lg mb-4"
                alt="cover"
            />

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{blog.title}</h1>

            {/* Meta */}
            <div className="text-sm text-gray-500 mb-3">
                {blog.publishedDate} • {blog.readingTime} min read
            </div>

            {/* Content */}
            <p className="text-gray-700 leading-relaxed text-base mb-4">
                {blog.post}
            </p>

            {/* Hashtags */}
            <div className="flex flex-wrap gap-2 mt-4">
                {blog.hashtags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
