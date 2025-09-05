const LiveChat =({name,message})=>{
    return (
        <div className="flex items-center gap-2 p-2 border-b border-gray-300 bg-gray-200 hover:shadow-md ">
            <div><img className="h-9 w-9 rounded-full" src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg" alt="LOGO" /></div>
        <h2 className="font-bold">{name}</h2>
        <p className="ml-2">{message}</p>
        </div>
    );
}
export default LiveChat; 