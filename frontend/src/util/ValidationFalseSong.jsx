import songFalse from "../assets/songs/validation_false_song.wav";

function ValidationFalseSong() {
  const audio = new Audio(songFalse);
  audio.volume = 0.1;
  audio.play();
}

export default ValidationFalseSong;
