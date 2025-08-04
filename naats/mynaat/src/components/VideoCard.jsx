const VideoCard = ({ title, src }) => (
  <div className="bg-black shadow p-4 rounded w-full">
    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
    <video
      controls
      className="video-player w-full h-80 object-cover rounded"
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

export default VideoCard;
