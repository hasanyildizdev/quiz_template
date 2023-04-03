const audio = new Audio('media/music.mp3');
const correct = new Audio('media/true.mp3');
const wrong = new Audio('media/wrong.mp3'); 
const time_up = new Audio('media/time_up.mp3'); 

 const music = {
  playMusic: () => {
    audio.play();
  },
  stopMusic: () => {
    audio.pause();
    audio.currentTime = 0;
  },
  playCorrect: () => {
     correct.play();
  },
  playWrong: () => {
     wrong.play();
  },
  playTimeUp: () => {
   time_up.play();
  }
};

export default music;