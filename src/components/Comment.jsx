const Comment = ({commentData}) => {
     const {name, comment ,result} = commentData;

  return (
    <div className="flex items-center gap-2 p-2 border-b border-gray-200">
      <div>
        <img
          className="h-9 w-9 rounded-full"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="LOGO"
        />
      </div>
      <div className="mx-2">
        <h1 className="font-bold">{name}</h1>
        <div>{comment}</div>
      </div>
    </div>
  );
};
export default Comment;
