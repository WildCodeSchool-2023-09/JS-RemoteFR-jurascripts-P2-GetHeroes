import buySong from "../assets/songs/buy_song.wav";

function BuySong() {
  const audio = new Audio(buySong);
  audio.volume = 0.1;
  audio.play();
}

export default BuySong;
