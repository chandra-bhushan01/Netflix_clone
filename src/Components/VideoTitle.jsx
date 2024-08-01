const VideoTitle = ({title,overview})=>{
    return (
      <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 w-1/4">{overview}</p>
        <div>
          <button className="bg-gray-500 text-white p-4 px-12 text-lg mx-2 rounded-lg">
            ▶️play
          </button>
          <button className="bg-gray-500 text-white p-4 px-12 text-lg mx-2 rounded-lg">
            more info
          </button>
        </div>
      </div>
    );
}
export default VideoTitle;