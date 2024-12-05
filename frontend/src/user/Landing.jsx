import { useState, useEffect, useRef } from "react";
import "./landing.css"; // Import the CSS file
import axios from "axios";

function Landing() {
  const [stations, setStations] = useState([]);

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    name: "Ujyaalo Radio Network",
    frequency: 90.0,
    address:
      "Ujyaalo Ghar (Behind Central Zoo), Lalitpur - 4, Shanti Chowk, Jawalakhel",
    province: 3,
    id: "Y_OOEauq-U3AB9GcRyuee",
    streamUrl: "https://stream-151.zeno.fm/h527zwd11uquv",
  });

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("04 : 38");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const [videoIndex, setVideoIndex] = useState(0);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  //Change Avatar Class
  let avatarClass = ["objectFitCover", "objectFitContain", "none"];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  //Play Audio Function
  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };

  useEffect(() => {
    const fetchStations = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/data");
        setStations(response.data);
      } catch (error) {
        console.error("Error fetching stations:", error);
      }
    };
    fetchStations();
  }, []);

  const musicAPI = stations;

  const handleNextSong = () => {
    const totalSongs = stations.length;
    const newIndex = musicIndex === totalSongs - 1 ? 0 : musicIndex + 1;
    setMusicIndex(newIndex);
    updateCurrentMusicDetails(newIndex);
  };

  const handlePrevSong = () => {
    const totalSongs = stations.length;
    const newIndex = musicIndex === 0 ? totalSongs - 1 : musicIndex - 1;
    setMusicIndex(newIndex);
    console.log(newIndex);
    updateCurrentMusicDetails(newIndex);
  };

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setCurrentMusicDetails({
      address: musicObject.address,
      frequency: musicObject.frequency,
      id: musicObject.id,
      streamUrl: musicObject.streamUrl,
      province: musicObject.province,
      name: musicObject.name,
    });
    setIsAudioPlaying(true);
  };

  const handleAudioUpdate = () => {
    //Input total length of the audio
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
      seconds < 10 ? `0${seconds}` : seconds
    }`;
    setMusicTotalLength(musicTotalLength0);

    //Input Music Current Time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
      currentSec < 10 ? `0${currentSec}` : currentSec
    }`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt(
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100
    );
    setAudioProgress(isNaN(progress) ? 0 : progress);
  };

  const vidArray = [
    "./Assets/Videos/video1.mp4",
    "./Assets/Videos/video2.mp4",
    "./Assets/Videos/video3.mp4",
    "./Assets/Videos/video4.mp4",
    "./Assets/Videos/video5.mp4",
    "./Assets/Videos/video6.mp4",
  ];

  const handleChangeBackground = () => {
    if (videoIndex >= vidArray.length - 1) {
      setVideoIndex(0);
    } else {
      setVideoIndex(videoIndex + 1);
    }
  };
  useEffect(() => {
    const intervalId = setInterval(handleChangeBackground, 20000); // 20000ms = 20 seconds

    // Cleanup interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [videoIndex]);

  return (
    <>
      <div className="container">
        <audio
          src={currentMusicDetails.streamUrl}
          ref={currentAudio}
          onEnded={handleNextSong}
          onTimeUpdate={handleAudioUpdate}
          autoPlay
        ></audio>
        <video
          src={vidArray[videoIndex]}
          loop
          muted
          autoPlay
          className="backgroundVideo"
        ></video>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className="musicPlayer">Radio Player</p>
          <p className="music-Head-Name">{currentMusicDetails.name}</p>
          <p className="music-Artist-Name">
            {currentMusicDetails.frequency} MHz
          </p>
          {/* <p className="music-Album-Name">{currentMusicDetails.streamUrl}</p> */}
          <img
            src="./Assets/Images/image.png"
            className={avatarClass[avatarClassIndex]}
            onClick={handleAvatar}
            alt="song Avatar"
            id="songAvatar"
          />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicTotalLenght">🔴 Live</p>
          </div>
          <input
            type="range"
            name="musicProgressBar"
            className="musicProgressBar"
            value={audioProgress}
            onChange={handleMusicProgressBar}
          />
          <div className="musicControlers">
            <i
              className="fa fa-backward musicControler fa-3x"
              onClick={handlePrevSong}
            ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i
              className={`${
                isAudioPlaying ? "fa fa-pause-circle-o" : "fa fa-play-circle-o"
              } fa-4x`}
              onClick={handleAudioPlay}
            ></i>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <i
              className="fa fa-forward musicControler fa-3x"
              onClick={handleNextSong}
            ></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
