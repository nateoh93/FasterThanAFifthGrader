const randomWords = require('random-words');
const startGame = document.getElementById('start-game');
const userTyping = document.getElementById('user-input')

function LoadGame() {
    let quote = document.getElementById('quote');
    let newQuote = randomWords({ min: 30, max: 70, join: ' '});

    quote.innerHTML = '';
    
    newQuote.split('').forEach( char => {
        const span = document.createElement('span');
        span.innerHTML = char;
        quote.appendChild(span);
    });

    startGame.removeEventListener('click', LoadGame);
    userTyping.focus()
};

export default LoadGame;