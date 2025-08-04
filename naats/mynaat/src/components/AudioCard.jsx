

const AudioCard = ({ title, src }) => (
  <div className="flex justify-center">
    <div className=" text-white rounded-lg shadow-lg p-4 mb-4 max-w-md w-full">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio tag.
      </audio>
    </div>
  </div>
);
export default AudioCard