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