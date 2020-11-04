const userTyping = document.getElementById('user-input');
const wpmResults = document.getElementById('wpm-results');
const startGame = document.getElementById('start-game');
import LoadGame from './start';
import Animate from './animate';
import Move from './move';
import compMove from './computer';


let startTime = null;
let endTime = null;
let char2 = document.getElementById('char2');
char2.style.left = '0px';
// let p = 0

function UserTyping() {
    let userInputs = userTyping.value.split('');
    let quote = document.querySelectorAll('span');
    let totalWrong = quote.length;
    let lastChar = quote.length - 1;
    let pixelMovement = (totalWrong / (500 * 5));
    
    Animate();
    // compMove();
    
    if (!startTime) { startTime = new Date(); }
    
    quote.forEach( (char, idx) => {
        if (userInputs[idx] === undefined) {
            char.classList.remove('right');
            char.classList.remove('wrong');
        } else if (char.innerHTML === userInputs[idx]) {
            char.classList.remove('wrong');
            char.classList.add('right');
            // p += pixelMovement
            // Move(pixelMovement);
            totalWrong -= 1
            // Move(totalWrong);
        } else {
            // p -= pixelMovement
            // console.log(-pixelMovement)
            // Move(-pixelMovement);
            // Move(0);
            char.classList.remove('right');
            char.classList.add('wrong');
            totalWrong += 1
        };

        let p = (1 - (totalWrong/quote.length)) * 500
        Move(p);
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