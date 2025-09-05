import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { YOUTUBE_API_KEY, YOUTUBE_WATCH_VIDEO } from "../utils/constants";
import { setToggleValue } from "../utils/appSlice";
import { useDispatch, useSelector } from "react-redux";
import LiveChat from "./LiveChat";
import { addMessage } from "../utils/chatSlice";
import { nameList } from "./help";
import CommentsStructure from "./CommentsStructure.jsx";
import WatchVideoShimmer from "./WatchvideoShimmer.jsx";

const WatchPage = () => {
  const [watchVideo, setWatchVideo] = useState([]);
  const [searchParams] = useSearchParams();
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const chatData = useSelector((store) => store?.chat);
  useEffect(() => {
    handleWatchPage();
    dispatch(setToggleValue());
  }, []);
  useEffect(() => {
    const t = setInterval(() => handleChatData(), 1500);
    return () => {
      clearInterval(t);
    };
  }, []);
  //    function generate() {
  // var finalName = nameList[Math.floor(Math.random() * nameList.length)];
  // return finalName;
  //     };
  const handleChatData = () => {
    //  const {finalName} = generate();
    const finalName = nameList[Math.floor(Math.random() * nameList.length)];
    let r = (Math.random() + 1).toString(36).substring(7);
    dispatch(addMessage({ name: finalName, message: r }));
  };
  const handleWatchPage = async () => {
    const videoId = searchParams.get("v");
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=` +
        YOUTUBE_API_KEY
    );
    // const data2 = await fetch(
    //   "https://youtube.googleapis.com/youtube/v3/liveBroadcasts?part=snippet%2CcontentDetails%2Cstatus&broadcastStatus=active&broadcastType=all&key=" +
    //     YOUTUBE_API_KEY
    // );

    const jsonData = await data.json();
    // const jsonData2 = await data2.json();
    setWatchVideo(jsonData.items);
    // console.log(jsonData.items);
  };
  return (
    <div className="flex items-start justify-center w-full mx-4 my-3 p-2.5">
      <div className="w-8/12">
        {watchVideo.length === 0 ? 
          <WatchVideoShimmer />
         : (
          watchVideo.map((video) => {
            return (
              <div className=" w-full " key={video.id}>
                <div>
                  <iframe
                    className="w-full h-96 rounded-2xl"
                    src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  ></iframe>
                </div>
                <div>
                  <div className="mx-1 my-2">
                    <h3 className="font-bold text-xl">
                      {video?.snippet?.title}
                    </h3>
                    <div className="flex justify-between items-center my-3">
                      <div className=" flex gap-3 text-center">
                        <h4 className="text-lg font-bold cursor-pointer">
                          {video?.snippet?.channelTitle}
                        </h4>
                        <button className="bg-gray-800 text-white text-xl rounded-full p-1.5 px-3 cursor-pointer hover:opacity-80 ">
                          Subscribe
                        </button>
                      </div>
                      <div className="flex text-center gap-3">
                        <div className="flex border rounded-full px-2.5 py-1.5 bg-gray-800 text-white ">
                          <button className=" px-1 cursor-pointer hover:opacity-80">
                            👍 {Math.round(video?.statistics?.likeCount / 100)}k
                          </button>
                          <div className="border opacity-40 "></div>
                          <button className=" px-1 cursor-pointer hover:opacity-80">
                            👎
                          </button>
                        </div>
                        <button className="p-2 px-3 bg-gray-800 text-white rounded-full  cursor-pointer hover:opacity-80">
                          {" "}
                          share
                        </button>
                        <button className="p-2 px-3 bg-gray-800 text-white rounded-full cursor-pointer hover:opacity-80">
                          Download
                        </button>
                      </div>
                    </div>
                    <div className="border bg-gray-800 text-white p-3 rounded-2xl">
                      <div className="">
                        {Math.round(video?.statistics?.viewCount / 10000)}k
                        views - 2years ago
                      </div>
                      <p className="h-14 overflow-auto my-2 [scrollbar-width:none]">
                        {video?.snippet?.localized?.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
        <div>
          <CommentsStructure />
        </div>
      </div>
      <div className=" border-2 border-gray-300 rounded-lg w-4/12 h-96 ml-2 overflow-y-hidden ">
        <h2 className="border-b-2 border-gray-300 bg-gray-300 text-center text-xl py-2 h-12">
          Live Chat{" "}
        </h2>
        <div className="h-72 overflow-y-auto  flex flex-col-reverse">
          {chatData.map((data, index) => {
            return (
              <LiveChat key={index} name={data?.name} message={data?.message} />
            );
          })}
        </div>
        <form
          className="flex w-full h-12 "
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(
              addMessage({ name: "AbubakerMughal", message: commentText })
            );
            setCommentText("");
          }}
        >
          <input
            className="h-full w-full outline-none px-5"
            value={commentText}
            onChange={(e) => {
              setCommentText(e.target.value);
            }}
            type="text"
            placeholder="Submit Comment"
          />
          <button className="px-2 bg-gray-400 rounded-b cursor-pointer ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default WatchPage;
