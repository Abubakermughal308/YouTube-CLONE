import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleSideBar } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { useRef } from "react";
import { YOUTUBE_API_KEY } from "../utils/constants";
import { cache } from "../utils/searchSlice";

const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setTimeout(() => handleSearchSuggestions(), 200);
    dispatch(cache({ searchText, data: suggestions }));
    // Cleanup function to clear the timer
    // when the component unmounts or searchText changes
    return () => {
      clearTimeout(timer);
    };
  }, [searchText]);
  useEffect(() => {
    handleToggleSidebar();
    handleSearch();
  }, []);
  const handleSearch = async () => {
    // if (!searchText) return null;
    // const data = await fetch(
    //   "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&" +
    //     searchText +
    //     "q=surfing&key=" +
    //     YOUTUBE_API_KEY
    // );
    // const jsonData = await data.json();
    // console.log("json", jsonData);
  };
  const handleToggleSidebar = () => {
    dispatch(toggleSideBar());
  };
  const handleSearchSuggestions = async () => {
    const data = await fetch(
      "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" +
        searchText
    );
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    console.log(searchQuery);
    
  };
  return (
    <div className="flex justify-between items-center px-2.5 h-14 shadow-lg    bg-white opacity-90   w-full overflow-hidden">
      <div className="flex items-center  ">
        <img
          className="w-14 h-10 mr-4 cursor-pointer"
          src="https://i0.wp.com/css-tricks.com/wp-content/uploads/2012/10/threelines.png"
          onClick={() => handleToggleSidebar()}
          alt="icon"
        />
        <div className="w-32 h-24 cursor-pointer ">
          
          <img
            className="overflow-hidden"
            src="https://t3.ftcdn.net/jpg/06/34/31/96/360_F_634319630_txtgmPLEEQ8o4zaxec2WKrLWUBqdBBQn.jpg"
            alt="Youtube Logo"
          />
        </div>
      </div>
      <div className="w-6/12 overflow-y-visible">
        <form onSubmit={(e) => e.preventDefault()} className=" ">
          <input
            className="w-[80%] py-2 border border-gray-400 rounded-l-full outline-none px-4"
            placeholder="Search"
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button
            onClick={() => handleSearch()}
            className="border border-gray-400 rounded-r-full py-2 px-2 cursor-pointer bg-gray-200"
          >
            Search
          </button>
        </form>
        <div className="absolute bg-white w-5/12 h-auto overflow-y-auto mt-2.5 rounded-lg shadow-lg">
          {showSuggestions &&
            suggestions.map((text) => (
              <div
                className="py-2 px-5 cursor-pointer hover:shadow-sm hover:bg-gray-300 font-semibold   "
                onClick={() => setSearchQuery(text)}
                key={text}
              >
                {text}
              </div>
            ))}
        </div>
      </div>
      <div className="w-16 h-16 ">
        <img
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="user_logo"
        />
      </div>
    </div>
  );
};
export default Header;
