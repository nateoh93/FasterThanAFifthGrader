import Animate from './animate';
import Move from './move';

const userTyping = document.getElementById('user-input');
const wpmResults = document.getElementById('wpm-results');
let startTime = null;
let endTime = null;

function UserTyping() {
    const userInputs = userTyping.value.split('');
    const quote = document.querySelectorAll('span');
    const totalWrong = quote.length;
    const lastChar = quote.length - 1;

    console.log(totalWrong)
    
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
            totalWrong -= 1
        } else {
            char.classList.remove('right');
            char.classList.add('wrong');
            totalWrong += 1
        };

        Move((1 - (totalWrong/quote.length)) * 500);
    });

    if (quote[lastChar].innerHTML === userInputs[lastChar] && totalWrong === 0) {
        endTime = new Date();
        const minutes = (endTime - startTime) / 1000 / 60;
        const numWords = quote.length / 5;
        const wpm = Math.floor(numWords / minutes);

        console.log(wpm)

        wpmResults.innerHTML = wpm + ' words per minute';
        // startGame.classList.remove('hidden');
        userTyping.removeEventListener('input', UserTyping);
        return;
    };
};

export default UserTyping;