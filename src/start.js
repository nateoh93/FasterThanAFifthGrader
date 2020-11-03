const randomWords = require('random-words');

function LoadGame() {
    let quote = document.getElementById('quote');
    let newQuote = randomWords({ min: 30, max: 70, join: ' '});

    quote.innerHTML = '';
    
    newQuote.split('').forEach( char => {
        const span = document.createElement('span');
        span.innerHTML = char;
        quote.appendChild(span);
    });

};

export default LoadGame;