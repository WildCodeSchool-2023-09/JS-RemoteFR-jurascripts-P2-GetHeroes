import againSong from "../assets/songs/again_song.wav";

function AgainSong() {
  const audio = new Audio(againSong);
  audio.volume = 0.1;
  audio.play();
}

export default AgainSong;
