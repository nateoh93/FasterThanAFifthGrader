import Animate from './animate';
import Move from './move';

const userTyping = document.getElementById('user-input');
const wpmResults = document.getElementById('wpm-results');
let startTime = null;
let endTime = null;

function UserTyping() {
    const userInputs = userTyping.value.split('');
    const quote = document.querySelectorAll('span');
    let totalWrong = quote.length;
    const lastChar = quote.length - 1;

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

        wpmResults.innerHTML = wpm + ' words per minute';
        
        const userTyping = document.getElementById('user-input');
        userTyping.removeEventListener('input', UserTyping);
        
        if (parseFloat(document.getElementById('char1').style.left) >= 500) {
            document.getElementById('winner').innerHTML = 'You lost'
            document.getElementById('winner-comp').innerHTML = 'Computer won!'
        } else {
            document.getElementById('winner').innerHTML = 'You won!'
            document.getElementById('winner-comp').innerHTML = 'Computer lost'
        }

        return;
    };
};

export default UserTyping;