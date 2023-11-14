import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function AudioPlayer({ playlist, autoPlay = true, volume = 0.1 }) {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  useEffect(() => {
    const audio = new Audio();
    audio.src = playlist[currentTrackIndex];
    audio.volume = volume;

    if (autoPlay) {
      audio.play();
    }

    const interval = setInterval(() => {
      setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    }, 37000);

    return () => {
      clearInterval(interval);
      audio.pause();
    };
  }, [currentTrackIndex, playlist, autoPlay, volume]);

  return null;
}

AudioPlayer.propTypes = {
  playlist: PropTypes.shape({
    length: PropTypes.number.isRequired,
  }).isRequired,
  autoPlay: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
};

export default AudioPlayer;
