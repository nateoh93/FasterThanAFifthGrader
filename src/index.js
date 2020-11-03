import LoadGame from './start';
import UserTyping from './type';

const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')
const restartGame = document.getElementById('restart-game')

startGame.addEventListener('click', LoadGame);
userTyping.addEventListener('input', UserTyping);

restartGame.addEventListener('click', () => {
    window.location.reload();
});

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 500;
  canvasEl.height = 100;

  const ctx = canvasEl.getContext("2d");
//   const game = new Game();
//   new GameView(game, ctx).start();
});
