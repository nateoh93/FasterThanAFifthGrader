const userTyping = document.getElementById('user-input');
const wpmResults = document.getElementById('wpm-results');
const startGame = document.getElementById('start-game');
import LoadGame from './start';
import Animate from './animate';
import Move from './move';


let startTime = null;
let endTime = null;

function UserTyping() {
    let userInputs = userTyping.value.split('');
    let quote = document.querySelectorAll('span');
    let totalWrong = quote.length;
    let lastChar = quote.length - 1;
    let pixelMovement = (totalWrong / (500 - 30));
    
    Animate()
    
    if (!startTime) { startTime = new Date(); }
    
    quote.forEach( (char, idx) => {
        if (userInputs[idx] === undefined) {
            char.classList.remove('right');
            char.classList.remove('wrong');
        } else if (char.innerHTML === userInputs[idx]) {
            char.classList.remove('wrong');
            char.classList.add('right');
            Move(pixelMovement);
            totalWrong -= 1
        } else {
            char.classList.remove('right');
            char.classList.add('wrong');
            totalWrong += 1
        };
    });

    if (quote[lastChar].innerHTML === userInputs[lastChar] && totalWrong === 0) {
        endTime = new Date();
        const minutes = (endTime - startTime) / 1000 / 60;
        const numWords = quote.length / 5;
        const wpm = Math.floor(numWords / minutes);
        wpmResults.innerHTML = wpm + ' words per minute';
        console.log(endTime)
        // startGame.classList.remove('hidden');
        userTyping.removeEventListener('input', UserTyping);
        return;
    };
};

export default UserTyping;