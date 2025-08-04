import AudioCard from "../components/AudioCard";

const audioList = [
  { title: "Shouq u Nayaz o Ijz", src:"naat-audios/Shouq u nayaz o ijz.mp3" },
  { title: "Aj Ask Mere Naat", src: "naat-audios/aj ask mere naat.mp3" },
  { title: "Mujh khatakar sa insaan", src:"naat-audios/Mujh khatakar sa insaan.wav" },
  { title: "Hazoor Dekhe Na", src:"naat-audios/Hazoor Dekhe Na By me.mp3" },
  { title: "Ae Rasool e Ameen", src:"naat-audios/Ae Rasool e Ameen at 9 convocation.mp3" },
  { title: "Sarkar De Bohe Te", src:"naat-audios/sarkar de bohe te at khatam.mp3" },
  { title: "Wo Shehre Mohabbat", src:"naat-audios/Wo Shehre Mohabbat at Mam House.mp3" },
];


export default function Audios() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white text-center">Audio Naats</h2>
      {audioList.map((naat, idx) => (
        <AudioCard key={idx} {...naat} />
      ))}
    </div>
  );
}