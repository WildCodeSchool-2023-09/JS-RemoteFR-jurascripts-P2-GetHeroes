import playSong from "../assets/songs/play_song.wav";

function PlaySong() {
  const audio = new Audio(playSong);
  audio.volume = 0.1;
  audio.play();
}

export default PlaySong;
