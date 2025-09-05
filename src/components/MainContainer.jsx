import { Link } from "react-router-dom";
import Button from "./Button";
import { LIST_BUTTONS, YOUTUBE_VIDEOS } from "../utils/constants";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";
import VideoCardShimmer from "./VideoCardShimmer";
const MainContainer = () => {
  const [video, setVideo] = useState([]);
  const handleVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS);
    const jsonData = await data.json();
    setVideo(jsonData.items);
    // console.log("jsonData", jsonData.items);
    
  };
  useEffect(() => {
    handleVideos();
  }, []);
  return (
    <div className="w-full mx-1.5 mt-3 ">
      <div className="flex overflow-auto [scrollbar-width:none] ">
        <div className="  shrink-0">
          {LIST_BUTTONS.map(
            (name) => (
              <Button key={name} name={name} />
            )
            // <Button btnName={name}/>
          )}
        </div>
      </div>
      <div className="my-6 mx-1 grid grid-cols-3">
        {video.length === 0 ? (
         <VideoCardShimmer/>
        ) : (
          video.map((video) => {
            return (
              <Link to={"/watch?v=" + video.id} key={video.id}>
                <VideoCard info={video} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default MainContainer;
