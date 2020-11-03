import LoadGame from './start';
import UserTyping from './type';

const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')
const restartGame = document.getElementById('restart-game')

startGame.addEventListener('click', LoadGame);
userTyping.addEventListener('input', UserTyping);
restartGame.addEventListener('click', LoadGame);