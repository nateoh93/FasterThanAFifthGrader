const userTyping = document.getElementById('user-input');
const wpmResults = document.getElementById('wpm-results');
const startGame = document.getElementById('start-game');

let startTime = null;
let endTime = null;

function UserTyping() {
    let userInputs = userTyping.value.split('');
    let quote = document.querySelectorAll('span');

    if (!startTime) {
        startTime = new Date();
    }

    quote.forEach( (char, idx) => {
        if (userInputs[idx] === undefined) {
            char.classList.remove('done');
            char.classList.remove('wrong');
        } else if (char.innerHTML === userInputs[idx]) {
            char.classList.remove('wrong');
            char.classList.add('done');
        } else {
            char.classList.remove('done');
            char.classList.add('wrong');
        };
    });

    let lastChar = quote.length - 1;

    if (quote[lastChar].innerHTML === userInputs[lastChar]) {
        endTime = new Date();
        const minutes = (endTime - startTime) / 1000 / 60;
        const numWords = quote.length / 5;
        const wpm = Math.floor(numWords / minutes);
        wpmResults.innerHTML = wpm

        startGame.classList.remove('hidden')
        document.removeEventListener('input', UserTyping);
        return;
    }
    
};

export default UserTyping;