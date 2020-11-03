import LoadGame from './start';
import UserTyping from './type'

const userTyping = document.getElementById('user-input')
const startGame = document.getElementById('start-game')

//consider if you want a timer
// let count = 5;
// function countdown() { 
    //     setInterval( () => {
        //         if (count <= 0) {
//             clearInterval(countdown);
//             document.getElementById('countdown').innerHTML = null
//         } else {
//             document.getElementById('countdown').innerHTML = 'Begin in ' + count
//         }
//         count -= 1;
//     }, 1000)
// };

// startGame.addEventListener('click', () => {
//     // countdown();
//     LoadGame();
//     startGame.removeEventListener('click')
//     userTyping.focus();
// });

startGame.addEventListener('click', LoadGame);
userTyping.addEventListener('input', UserTyping);
