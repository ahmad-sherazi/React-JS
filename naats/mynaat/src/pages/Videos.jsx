import VideoCard from "../components/VideoCard";

const videoList = [
  { title: "Naat Video 1", src: "/naat-videos/Pakre Dil Ruba.mp4" },
  { title: "Naat Video 2", src: "/naat-videos/Naseeban walian nu yar de.MOV.mp4" },
  { title: "Naat Video 3", src: "/naat-videos/Naat at 10th convocation.mp4" },
  { title: "Naat Video 4", src: "/naat-videos/Ae Rasool e Ameen.mp4" },
  { title: "Naat Video 5", src: "/naat-videos/Aisa koi mehboob.mp4" },
  { title: "Naat Video 6", src: "/naat-videos/pu Gujjar khan.mp4" },
];

export default function Videos() {
   return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {videoList.map((video, index) => (
          <VideoCard key={index} title={video.title} src={video.src} />
        ))}
      </div>
    </div>
  );
};

