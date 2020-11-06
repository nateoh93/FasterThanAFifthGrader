import LoadGame from './start';
// import UserTyping from './type';
// import Animate from './animate'

// const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')
const restartGame = document.getElementById('restart-game')

startGame.addEventListener('click', LoadGame);

restartGame.addEventListener('click', () => {
  window.location.reload();
});

const playBtn = document.getElementById('play');
const audio = document.getElementById('theme-song');
const icon = document.getElementById('icon');

playBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    icon.classList.remove("fa-play-circle");
    icon.classList.add("fa-pause-circle");
  } else {
    audio.pause();
    icon.classList.remove("fa-pause-circle");
    icon.classList.add("fa-play-circle");
  }
})