const audio = new Audio('media/music.mp3');

 const music = {
  play: () => {
    audio.play();
  },
  stop: () => {
    audio.pause();
    audio.currentTime = 0;
  }
};

export default music;