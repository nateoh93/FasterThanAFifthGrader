const randomWords = require('random-words');

function LoadGame() {
    const quote = document.getElementsByClassName('quote')[0];
    quote.innerHTML = randomWords({ min: 30, max: 70, join: ' '})
}

export default LoadGame;