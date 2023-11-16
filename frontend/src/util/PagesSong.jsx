import pagesSong from "../assets/songs/page_song.wav";

function PagesSong() {
  const audio = new Audio(pagesSong);
  audio.volume = 0.1;
  audio.play();
}
export default PagesSong;
