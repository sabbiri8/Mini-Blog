export default function Bookmark({bookmark}){
    return (
        <div>
            <h2 className="text-3xl">
                {bookmark.title}
            </h2>
        </div>
    );
}