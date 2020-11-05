import compMove from './computer';
import UserTyping from './type';

const randomWords = require('random-words');
const startGame = document.getElementById('start-game');
const userTyping = document.getElementById('user-input');

function LoadGame() {
    let timeleft = 3;

    let timer = setInterval( function() {
        if (timeleft <= 0) {
            clearInterval(timer);
            document.getElementById("countdown").style.display = "none";
            compMove();
        } else {
            document.getElementById("countdown").style.display = "flex";
            document.getElementById("countdown").innerHTML = 'Begins in ' + timeleft + "...";
        };

        timeleft -= 1;
    }, 1000);

    startGame.classList.add('hidden')
    const quote = document.getElementById('quote');
    const wpmResults = document.getElementById('wpm-results');
    const newQuote = randomWords({ exactly: 30, join: ' '});

    quote.innerHTML = '';
    wpmResults.innerHTML = '';
    userTyping.value = '';
    
    newQuote.split('').forEach( char => {
        const span = document.createElement('span');
        span.innerHTML = char;
        quote.appendChild(span);
    });

    userTyping.focus();
    userTyping.addEventListener('input', UserTyping);
    startGame.removeEventListener('click', LoadGame);
    return;
};

export default LoadGame;