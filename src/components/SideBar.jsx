import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {
  const toggleValue = useSelector((store) => store.app.toggleValue);
  return !toggleValue && (
    <div className={"w-3/12 py-2  shadow-md h-screen relative bg-white" + (!toggleValue && "bg-black")} >
     <div className="overflow-y-auto h-full scrollbar-width:0.5rem scrollbar-thumb-gray-700 scrollbar-track-gray-100">
       <section className="text-lg font-semibold m-2.5">
        <ul className="ml-5">
          <Link to="/">
            
            <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Home</li>
          </Link>
          <Link to="/demo">
            
            <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Demo</li>
          </Link>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Short</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Subscriptions</li>
        </ul>
      </section>
      <div className="border-b mt-2.5 opacity-40"></div>
      <section className="text-lg font-semibold m-2.5">
        <h1 className="text-xl font-bold py-1 mx-2" >Explore</h1>
        <ul className="ml-5 mt-1.5">
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Music</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Gaming</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">News</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Sport</li>
        </ul>
      </section>
      <div className="border-b mt-2.5 opacity-40"></div>
      <section className="text-lg font-semibold m-2.5">
        <h1 className="text-xl font-bold py-1 mx-2">You </h1>
        <ul className="ml-5 mt-1.5">
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">History</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Playlists</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Watch Later</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Liked Videos</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Download</li>
        </ul>
      </section>
      <div className="border-b mt-2.5 opacity-40"></div>
      <section className="text-lg font-semibold m-2.5">
        <ul className="ml-5">
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Setting</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Report history</li>
          <li className="w-full hover:bg-gray-200 p-2 cursor-pointer rounded-2xl">Help</li>
          <li className="w-full hover:bg-gray-20p-2 cursor-pointer rounded-2xl">Send feedback</li>
        </ul>
      </section>
     </div>
    </div>
  );
};
export default SideBar;
