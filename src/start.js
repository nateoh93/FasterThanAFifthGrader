const randomWords = require('random-words');
const startGame = document.getElementById('start-game');
const userTyping = document.getElementById('user-input');
// const startButton = document.getElementById('user-input');

function LoadGame() {
    startGame.classList.add('hidden')
    let quote = document.getElementById('quote');
    let wpmResults = document.getElementById('wpm-results');
    let newQuote = randomWords({ exactly: 30, join: ' '});

    quote.innerHTML = '';
    wpmResults.innerHTML = '';
    
    newQuote.split('').forEach( char => {
        const span = document.createElement('span');
        span.innerHTML = char;
        quote.appendChild(span);
    });

    startGame.removeEventListener('click', LoadGame);
    userTyping.focus();
};

export default LoadGame;