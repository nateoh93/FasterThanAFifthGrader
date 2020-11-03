import LoadGame from './start';
import UserTyping from './type';

const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')

startGame.addEventListener('click', LoadGame);
userTyping.addEventListener('input', UserTyping);