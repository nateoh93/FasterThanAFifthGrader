import LoadGame from './start';
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

const mute = document.getElementById('volume');
const volumeIcon = document.getElementById('volume-icon');

mute.addEventListener('click', () => {
  if (audio.volume !== 0.0) {
    audio.volume = 0.0;
    volumeIcon.classList.remove("fa-volume-up");
    volumeIcon.classList.add("fa-volume-mute");
  } else {
    audio.volume = 0.1;
    volumeIcon.classList.remove("fa-volume-mute");
    volumeIcon.classList.add("fa-volume-up");
  }
})