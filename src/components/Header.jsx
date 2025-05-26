export default function Header(){
    return (
        <>
          <div className=" flex justify-between items-center p-4 mx-4">
            <h1 className="text-4xl font-bold">
                Knowledge Cafe
            </h1>
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="" className="w-10 h-10 rounded-full filter brightness-75"/>
          </div>
        </>
    );
}