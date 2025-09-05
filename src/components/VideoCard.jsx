const VideoCard = ({ info }) => {
  return (
    <div className="max-w-96 mx-1 my-1 cursor-pointer ">
      <img
        className="rounded-xl"
        src={info?.snippet?.thumbnails?.standard.url}
        alt="thumbnail"
      />
      <div className="mx-1 my-2">
        <h3 className="font-bold">{info?.snippet?.title}</h3>
        <h4 className="text-base font-semibold">
          {info?.snippet?.channelTitle}
        </h4>
        <div className="opcity-75">
          {Math.round(info?.statistics?.viewCount / 10000)}k views
        </div>
      </div>
    </div>
  );
};
export default VideoCard;
